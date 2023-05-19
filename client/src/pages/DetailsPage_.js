import React, { useCallback, useEffect } from "react";

import Header from "parts/Header";
import PageDetailTitle from "parts/PageDetailTitle";
import PageDetailBreadcrumb from "parts/PageDetailBreadcrumb";
import FeaturedImage from "parts/FeaturedImage";
import PageDetailDescription from "parts/PageDetailDescription";
import BookingForm from "parts/BookingForm_";
import Activities from "parts/Activities";
import Testimony from "parts/Testimony";
import Footer from "parts/Footer";

import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { fetchPage } from "store/actions/page";
import SkeletonLoadingDetailPage from "./SkeletonLoadingDetailPage";

function DetailsPage_() {
  const page = useSelector((state) => state.page);
  const { id } = useParams();
  const dispatch = useDispatch();

  const breadcrumb = [
    { pageTitle: "Home", pageHref: "/" },
    { pageTitle: "Kosan Details", pageHref: "" },
  ];

  const fnLoadPage = useCallback(async (id) => {
    if (!page[id]) {
      await dispatch(fetchPage(`/detail-page/${id}`, id));
    }
  }, []);

  useEffect(() => {
    window.title = "Details Page";
    window.scrollTo(0, 0);

    fnLoadPage(id);
  }, [id]);

  if (!page[id]) return <SkeletonLoadingDetailPage />;

  return (
    <>
      <Header />
      <PageDetailBreadcrumb breadcrumb={breadcrumb} />
      <section className="flex xl:flex-row flex-col justify-center m-0">
        <FeaturedImage />
        <section className="xl:w-1/2 w-full xl:ml-5 xl:mr-28 m-0 p-5">
          <PageDetailTitle />
          <PageDetailDescription data={page[id]} />
          <BookingForm />
        </section>
      </section>
      <Activities className="mt-0" data={page[id].activityId} />
      <Testimony data={page[id].testimonial} />
      <Footer />
    </>
  );
}

export default DetailsPage_;
