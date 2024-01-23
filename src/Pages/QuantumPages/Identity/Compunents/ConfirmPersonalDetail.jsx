import React from "react";

const ConfirmPersonalDetail = () => {
  return (
    <div className="w-[80%] m-auto">
      <h1 className="text-2xl font-bold -mt-14 py-4">
        Confirm your personal details{" "}
      </h1>
      <p className="font-semibold">
        Note! On the next page you will be required to upload a 'proof address'
        document.Please make sure your document meet these requirements:
      </p>
      <div className="bg-gray-200 mt-5 border-[1px] rounded-lg border-black px-8 py-12 space-y-8  font-semibold">
        <p>
          Main requirements: provide a good quality picture of the proof of
          address document with all the corners and sides visible, or an
          original PDF file with all pages included.{" "}
        </p>
        <p>
          Acceptable types: Electricity bills, internet bills, gas bills, water
          bills, landline phone bills; personal bank account statements; and
          governmental documents
        </p>
        <p>
          'Proof of Address' documents that were issued longer than 3 months ago
          from today's date will not be accepted.
        </p>
        <p>
          'Proof of Address' documents that do not include your full name, full
          address details and/or date of document issue will not be accepted.
        </p>
      </div>
    </div>
  );
};

export default ConfirmPersonalDetail;
