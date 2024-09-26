import React from "react";

const Refund = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-600">
        Refund and Cancellation Policy
      </h1>

      {/* Effective Date */}
      <p className="text-gray-600 text-lg mb-8">
        Effective Date: <span className="font-medium">25th September, 2024</span>
      </p>

      <p className="mb-6 text-gray-700">
        At Sujal Tanwar, we strive to ensure that our customers are
        satisfied with their purchases. This Refund and Cancellation Policy
        outlines the conditions and procedures for requesting refunds, returns,
        and cancellations for products purchased from our website,{" "}
        <a href="http://www.allblueee.com" className="text-blue-500 underline">
          www.allblueee.com
        </a>
        .
      </p>

      {/* Cancellation Policy */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-600">
          1. Cancellation Policy
        </h2>
        <h3 className="text-xl font-semibold mb-2">1.1 Order Cancellation by Customer</h3>
        <p className="mb-4 text-gray-700">
          <span className="font-semibold">Timeframe for Cancellation:</span> You
          may cancel your order within <strong>24 hours</strong> of placing it.
          If 24 hours have passed since your order, cancellation may not be
          possible as the product might have already been processed or shipped.
        </p>
        <p className="mb-4 text-gray-700">
          <span className="font-semibold">How to Cancel:</span> To cancel an
          order, please contact our customer service at{" "}
          <a href="mailto:support@allblueee.com" className="text-blue-500">
            support@allblueee.com
          </a>{" "}
          or [Insert Contact Number]. Ensure you provide your order number and
          relevant details.
        </p>
        <p className="mb-4 text-gray-700">
          <span className="font-semibold">Cancellation Fees:</span> Orders
          canceled within the 24-hour window will not incur any cancellation
          fees, and a full refund will be processed.
        </p>
        <p className="mb-4 text-gray-700">
          <span className="font-semibold">After Shipment:</span> Orders that
          have already been shipped cannot be canceled. In such cases, you may
          need to initiate a return once you receive the product (see return
          process below).
        </p>

        <h3 className="text-xl font-semibold mb-2">1.2 Order Cancellation by  Sujal Tanwar</h3>
        <p className="mb-4 text-gray-700">
          We reserve the right to cancel your order in case of:
        </p>
        <ul className="list-disc ml-8 mb-4 text-gray-700">
          <li>Product unavailability.</li>
          <li>Payment processing issues.</li>
          <li>Incorrect or incomplete address details provided by the customer.</li>
          <li>Other unforeseen circumstances that affect the processing of your order.</li>
        </ul>
        <p className="mb-4 text-gray-700">
          In such cases, we will notify you of the cancellation and provide a
          full refund.
        </p>
      </section>

      {/* Return and Refund Policy */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-600">
          2. Return and Refund Policy
        </h2>
        <h3 className="text-xl font-semibold mb-2">2.1 Eligibility for Return</h3>
        <ul className="list-disc ml-8 mb-4 text-gray-700">
          <li>Products must be returned within 14 days of the delivery date.</li>
          <li>Products must be unused, undamaged, and in their original packaging.</li>
          <li>
            Return requests must be accompanied by the original receipt or proof
            of purchase.
          </li>
          <li>
            Customized or personalized products are not eligible for return
            unless they arrive damaged or defective.
          </li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">2.2 Return Process</h3>
        <p className="mb-4 text-gray-700">
          To initiate a return, email us at{" "}
          <a href="mailto:support@allblueee.com" className="text-blue-500">
            support@allblueee.com
          </a>{" "}
          with your order details, reason for the return, and images of the
          product (if applicable). Once we approve the return, you will receive
          a return shipping label or instructions to ship the product back to
          us. Customers are responsible for return shipping costs unless the
          product is defective or incorrectly sent.
        </p>

        <h3 className="text-xl font-semibold mb-2">2.3 Refund Process</h3>
        <p className="mb-4 text-gray-700">
          After receiving and inspecting the returned product, we will notify
          you via email regarding the approval or rejection of your refund. If
          approved, the refund will be processed to the original method of
          payment within <strong>5-7 business days</strong>. Shipping costs, if
          applicable, are non-refundable.
        </p>

        <h3 className="text-xl font-semibold mb-2">2.4 Non-Returnable Items</h3>
        <ul className="list-disc ml-8 mb-4 text-gray-700">
          <li>Items that are used, altered, or damaged after delivery.</li>
          <li>Products on clearance or marked "final sale."</li>
          <li>Customized or personalized products.</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">2.5 Defective or Damaged Products</h3>
        <p className="mb-4 text-gray-700">
          If you receive a defective or damaged product, please notify us within
          <strong> 48 hours</strong> of delivery. We will offer either a
          replacement or a full refund, including shipping charges, after
          verifying the issue.
        </p>
      </section>

      {/* Late or Missing Refunds */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-600">
          3. Late or Missing Refunds
        </h2>
        <p className="mb-4 text-gray-700">
          If you haven’t received a refund after 7 business days:
        </p>
        <ul className="list-disc ml-8 mb-4 text-gray-700">
          <li>Check your bank account again.</li>
          <li>Contact your credit card company or bank, as there may be processing delays.</li>
          <li>If you still have not received your refund, please contact us at{" "}
            <a href="mailto:support@allblueee.com" className="text-blue-500">
              support@allblueee.com
            </a>.
          </li>
        </ul>
      </section>

      {/* Exchange Policy */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-600">
          4. Exchange Policy
        </h2>
        <p className="mb-4 text-gray-700">
          We do not offer direct exchanges. If you wish to exchange a product,
          you must follow the return process and then place a new order for the
          desired item.
        </p>
      </section>

      {/* Contact Us */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-600">
          5. Contact Us
        </h2>
        <p className="mb-2 text-gray-700">
          If you have any questions or need further assistance regarding refunds, cancellations, or returns, feel free to reach out:
        </p>
        <p className="text-gray-700">
          <strong>Email:</strong>{" "}
          <a href="mailto:allblueee2024@gmail.com" className="text-blue-500">
          allblueee2024@gmail.com
          </a>
          <br />
          <strong>Phone:</strong> +916367485143 <br />
          <strong>Address:</strong> A-100, Laxmi Narayan Puri, Jaipur, Rajasthan- 302003
        </p>
      </section>
    </div>
  );
};

export default Refund;
