/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import useMe from "../../components/hooks/useMe";
import { Dashboard } from "../../components/templates";
import { Loading } from "../../components/molecules";
import Header from "../../components/organisms/Header";

const DashboardPage = () => {
  const { data, loading, error } = useMe();

  if (loading) {
    return <Loading />;
  }

  if (data && !data.displayName) {
    return <div>Let's complete profile</div>;
  }

  return (
    <div>
      <Dashboard />
    </div>
  );
};

export default DashboardPage;
