import React from "react";

import InputText from "elements/Form/InputText";
import InputFile from "elements/Form/InputFile";

import logoBca from "assets/images/logo-bca.jpg";
import logoBni from "assets/images/logo-bni.jpg";

export default function Payment(props) {
  const { data, ItemDetails } = props;

  const tax = 5;
  const dp = 50;
  const subTotal = (dp * ItemDetails.price) / 100 + dp;
  const grandTotal = (tax * ItemDetails.price) / 100 + tax;
  return (
    <section className="flex md:flex-row flex-col justify-center items-center">
      <div className="md:w-1/2 flex justify-end md:ml-10">
        <div className="md:w-96">
          <p>Transfer Pembayaran : </p>
          <p className="font-semibold">IDR.{ItemDetails.price}</p>
          <p>Sub Total: {dp}% = {subTotal}</p>
          <p>Tax: {tax}% = {grandTotal}</p>
          <p className="text-xl font-bold">Total: IDR.{subTotal+grandTotal}</p>
          <div className="flex items-center p-2">
            <img src={logoBca} alt="BCA" className="w-24" />
            <div className="pl-2">
              <p>Bank Central Asia</p>
              <p>228 11921224 12324</p>
              <p>Kosan Jaya Indonesia</p>
            </div>
          </div>
          <div className="flex items-center p-2">
            <img src={logoBni} alt="BNI" className="w-24" />
            <div className="pl-2">
              <p>Bank Negara Indonesia</p>
              <p>212 112224 13325</p>
              <p>Kosan Jaya Indonesia</p>
            </div>
          </div>
        </div>
      </div>
      <div className="md:w-1/2 mb-5 md:mb-0">
        <label htmlFor="proofPayment">Upload Bukti Transfer</label>
        <InputFile
          accept="image/*"
          id="proofPayment"
          name="proofPayment"
          value={data.proofPayment}
          onChange={props.onChange}
        />

        <label htmlFor="bankName">Asal Bank</label>
        <InputText
          id="bankName"
          name="bankName"
          type="text"
          value={data.bankName}
          onChange={props.onChange}
        />

        <label htmlFor="bankHolder">Nama Pengirim</label>
        <InputText
          id="bankHolder"
          name="bankHolder"
          type="text"
          value={data.bankHolder}
          onChange={props.onChange}
        />
      </div>
    </section>
  );
}
