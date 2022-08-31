import React, { useEffect, useState } from "react";
import CommunityCard from "../components/CommunityCard";
import Footer from "../components/Footer";
import Header from "../components/Header";
import axios from "axios";
import { CommunityBrief } from "../interface/communityInterface";
import { useAppSelector, useAppDispatch } from "../app/hook";
import {
  joinCommunity,
  resetMembershipStatus,
  selectMembershipError,
  selectMemberships,
  selectMembershipStatus,
} from "../features/community/membershipSlice";
import { toast } from "react-toastify";
import { HashLoader } from "react-spinners";
import { Navigate, useNavigate } from "react-router-dom";

function CommunityJoinScreen() {
  const [communities, setCommunities] = useState<Array<CommunityBrief>>([]);
  const [loading, setLoading] = useState(false);
  const joined = useAppSelector(selectMemberships).map(
    (membership) => membership.community._id
  );
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const status = useAppSelector(selectMembershipStatus);
  const error = useAppSelector(selectMembershipError);

  useEffect(() => {
    const fetchCommunities = async () => {
      const { data } = await axios.get("/api/community/");
      const filteredData = data.filter(
        (com: CommunityBrief) => !joined.includes(com._id)
      );
      setCommunities(filteredData);
    };
    fetchCommunities();
  }, [setCommunities]);

  useEffect(() => {
    if (status === "succeeded") {
      toast.success("You are a member now!");
      dispatch(resetMembershipStatus());
      setLoading(false);
      navigate(`/community/${joined[joined.length - 1]}`);
    } else if (status === "failed") {
      toast.error(error);
      dispatch(resetMembershipStatus());
      setLoading(false);
    }
  }, [status]);

  const handleJoin = (id: string) => {
    setLoading(true);
    dispatch(joinCommunity(id));
  };

  return (
    <div>
      {loading && (
        <div className="h-screen flex justify-center items-center bg-base-content opacity-40 fixed top-0 right-0 left-0 z-100">
          <HashLoader color="#54bab9" size={40} />
        </div>
      )}
      <Header />
      <div className="2xl:container 2xl:mx-auto lg:mx-10 mx-3 min-h-screen">
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {communities.map((community, i) => (
            <CommunityCard
              key={i}
              handleJoin={handleJoin}
              community={community}
            />
          ))}
        </div>
      </div>
      <Footer active="mypage" />
    </div>
  );
}

export default CommunityJoinScreen;
