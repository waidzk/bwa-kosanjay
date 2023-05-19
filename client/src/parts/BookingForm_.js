import React, { useState } from "react";

import Button from "elements/Button";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { checkoutBooking } from "store/actions/checkout";
import { DatePicker, InputGroup } from "rsuite";
import "rsuite/dist/rsuite.min.css";

function BookingForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [data, setData] = useState({
    meetDate: new Date(),
    date: {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  });

  function updateMeetDate(date) {
    setData((prev) => ({
      ...prev,
      date: {
        ...prev.date,
      },
      meetDate: date,
    }));
  }

  function updateStartDate(date) {
    setData((prev) => ({
      ...prev,
      date: {
        ...prev.date,
        startDate: date,
      },
    }));
  }

  function updateEndDate(date) {
    setData((prev) => ({
      ...prev,
      date: {
        ...prev.date,
        endDate: date,
      },
    }));
  }

  const page = useSelector((state) => state.page);
  const { id } = useParams();

  const itemDetails = page?.[id] || [];

  function startBooking() {
    dispatch(
      checkoutBooking({
        _id: itemDetails._id,
        meetDate: data.meetDate,
        date: {
          startDate: data.date.startDate,
          endDate: data.date.endDate,
        },
      })
    );
    navigate("/checkout");
  }

  return (
    <section className="border m-0 border-black p-5 rounded-md">
      <h2 className="text-lg">
        Start from{" "}
        <span className="text-green-500">IDR.{itemDetails.price}</span> /month
      </h2>
      <div className="flex flex-col p-2">
        <span className="label">
          Tentukan jadwalmu untuk bertemu dengan pemilik kosan
        </span>
        <DatePicker
          value={data.meetDate}
          onChange={(date) => updateMeetDate(date)}
        />
        <span className="label">Tentukan rencanamu berapa bulan sewa kos</span>
        <InputGroup>
          <DatePicker
            value={data.date.startDate}
            onChange={(date) => updateStartDate(date)}
            format="yyyy-MM"
            block
            appearance="subtle"
            style={{ width: 230 }}
          />
          <InputGroup.Addon>-</InputGroup.Addon>
          <DatePicker
            value={data.date.endDate}
            onChange={(date) => updateEndDate(date)}
            format="yyyy-MM"
            block
            appearance="subtle"
            style={{ width: 230 }}
          />
        </InputGroup>
      </div>
      <Button
        className="btn text-white"
        hasShadow
        isPrimary
        isBlock
        onClick={startBooking}
      >
        Continue to Book
      </Button>
    </section>
  );
}

export default BookingForm;
