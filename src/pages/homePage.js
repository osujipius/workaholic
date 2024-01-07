import React, { useState } from "react";
import HomeHero from "../components/molecules/HomeHero";
import HomeStats from "../components/molecules/WhyUs";
import HomeJobCategory from "../components/molecules/HomeJobCategory";
import HomeReview from "../components/molecules/Reviews";
import TrendingTab from "../components/molecules/TrendingTab";
import Faq from "../components/molecules/Faq";
import Pricing from "../components/molecules/Pricing";
import { useAuth } from "../contexts/AuthContext";
import Notification from "../components/atoms/Notification";

export default function HomePage() {
  const { user } = useAuth();
  const [showNotification, setShowNotification] = useState(false);

  const triggerAlert = () => {
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 3500);
  };

  const config = {
    reference: new Date().getTime().toString(),
    email: user?.email,
    amount: 150000, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
    publicKey: "pk_test_ad2882c165a0f5842afea2f28c68f9e971426a54",
    // currency: "USD",
  };

  const handlePaystackSuccessAction = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);
  };

  // you can call this function anything
  const handlePaystackCloseAction = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log("closed");
  };

  const componentProps = {
    ...config,
    text: "Get access",
    onSuccess: (reference) => handlePaystackSuccessAction(reference),
    onClose: handlePaystackCloseAction,
  };

  return (
    <>
      <HomeHero />
      <HomeStats />
      <HomeJobCategory />
      <TrendingTab />
      <Pricing
        componentProps={componentProps}
        user={user}
        triggerAlert={triggerAlert}
      />
      <HomeReview />
      <Faq />
      {showNotification && (
        <Notification
          message={"Authenticate to purchase"}
          show={showNotification}
          setShow={setShowNotification}
          error
        />
      )}
    </>
  );
}
