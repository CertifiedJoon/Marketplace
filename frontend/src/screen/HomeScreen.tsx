import React, { useEffect } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";

import CategoryMenu from "../components/CategoryMenu";
import Card from "../components/ItemCard";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useAppSelector, useAppDispatch } from "../app/hook";
import {
  selectCommunityId,
  selectSaleMode,
  setSaleMode,
} from "../features/header/headerSlice";
import {
  selectItems,
  getItemsFiltered,
  getMyItems,
} from "../features/item/itemListSlice";
import { ItemBrief } from "../interface/itemInterface";
import { selectUser } from "../features/user/userSlice";
import { toast } from "react-toastify";

type Props = {
  sell?: boolean;
};

function HomeScreen({ sell = false }: Props) {
  const saleMode = useAppSelector(selectSaleMode);
  const user = useAppSelector(selectUser);
  const items = useAppSelector(selectItems);
  const community = useAppSelector(selectCommunityId);
  const dispatch = useAppDispatch();
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (saleMode) {
      if (!user) {
        toast.error("You must login first");
        dispatch(setSaleMode(false));
        navigate("/login");
      }
      if (params.itemType && community === "0")
        dispatch(getMyItems({ type: params.itemType, community: "all" }));
      else if (params.itemType && community !== "0")
        dispatch(getMyItems({ type: params.itemType, community }));
      else if (community !== "0")
        dispatch(getMyItems({ type: "all", community }));
      else dispatch(getMyItems({ type: "all", community: "all" }));
    } else {
      if (params.itemType && community === "0")
        dispatch(getItemsFiltered({ type: params.itemType, community: "all" }));
      else if (params.itemType && community !== "0")
        dispatch(getItemsFiltered({ type: params.itemType, community }));
      else if (community !== "0")
        dispatch(getItemsFiltered({ type: "all", community }));
      else dispatch(getItemsFiltered({ type: "all", community: "all" }));
    }
  }, [dispatch, params, community, saleMode]);

  return (
    <>
      <Header sell={sell} />
      {params.itemType !== undefined ? (
        <CategoryMenu activeType={params.itemType} />
      ) : (
        <CategoryMenu activeType="all" />
      )}

      <div className="2xl:container 2xl:mx-auto lg:mx-10 mx-3 min-h-screen">
        {saleMode && (
          <div className="grid grid-cols-2 gap-4 mb-7">
            <div>
              <Link to="/select-posting-category">
                <button className="btn btn-block btn-sm btn-secondary">
                  Post an Item
                </button>
              </Link>
            </div>
            <div>
              <Link to="/post/event">
                <button className="btn btn-block btn-sm btn-secondary">
                  Host an Event
                </button>
              </Link>
            </div>
          </div>
        )}
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {items.map((item: ItemBrief, i) => (
            <Card
              key={i}
              cardDetail={{
                _id: item._id,
                type: item.type,
                heading: item.heading,
                sub_heading: item.sub_heading,
                thumbnail: item.images
                  .filter((img) => img.thumbnail)
                  .map((item) => item.image),
                price: item.price,
                profile: item.user.profile_image,
                badges: item.user.badges,
                saleMode,
              }}
            />
          ))}
        </div>
      </div>
      <Footer active="explore" />
    </>
  );
}

export default HomeScreen;
