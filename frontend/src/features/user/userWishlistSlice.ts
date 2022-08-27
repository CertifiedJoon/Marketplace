import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import {RootState} from '../../app/store'
import axios from 'axios'
import {Like} from '../../interface/userProfileInterface'
import {KnownError} from '../../interface/exceptionInterface'
interface WishlistState {
    wishlist : Array<string> | null
    status : 'idle' | 'pending' | 'succeeded' | 'failed'
    error : string | undefined
}

const initialState : WishlistState = {
    wishlist : null,
    status: 'idle',
    error: ''
}

const getWishlist = createAsyncThunk<
    Array<string>,
    undefined,
    {
        state:RootState,
        rejectValue: KnownError,
    }
>('wishlist/getWishlist', async (args, thunkApi) => {
    let token = thunkApi.getState().user.user ?
        thunkApi.getState().user.user?.token : ''

    const config = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    }
    let data : Array<Like> | null = null
    try {
        const response = await axios.get(
            '/api/items/getliked/',
            config
        )
        data = response.data
    } catch (error) {
        if (axios.isAxiosError(error)) {
            if (error.response)
                return thunkApi.rejectWithValue(error.response.data as KnownError)
        }
    } 
    const ret = data? data?.map((like) => like.item) : []
    return ret as Array<string>
})

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState,
    reducers: {
        resetWishlistStatus : (state: WishlistState) => {
            state.status = 'idle',
            state.error = ''
        },
        addToWishlist : (state: WishlistState, action: PayloadAction<string>) => {
            state.wishlist?.push(action.payload)
            state.status = 'succeeded'
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getWishlist.pending, (state, action) => {
                state.status = 'pending'
            })
            .addCase(getWishlist.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.wishlist = action.payload
            })
            .addCase(getWishlist.rejected, (state, action) => {
                state.status = 'failed'
                if (action.payload) {
                    state.error = action.payload.error.details.detail
                } else {
                    state.error = action.error.message
                }
            })
    }
})