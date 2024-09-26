import React from "react";

const ShippingPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-600">
        Shipping Policy
      </h1>

      {/* Effective Date */}
      <p className="text-gray-600 text-lg mb-8">
        Effective Date: <span className="font-medium">25th September, 2024</span>
      </p>

      <p className="mb-6 text-gray-700">
        At Sujal Tanwar, we are committed to delivering your order promptly
        and efficiently. This Shipping Policy outlines the delivery process,
        timelines, and shipping charges associated with your purchase from{" "}
        <a href="http://www.allblueee.com" className="text-blue-500 underline">
          www.allblueee.com
        </a>
        .
      </p>

      {/* Shipping Process */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-600">
          1. Shipping Process
        </h2>
        <p className="mb-4 text-gray-700">
          Once your order is successfully placed and payment is confirmed, we
          will process your order within <strong>2-3 business days</strong>. You
          will receive a notification via email or SMS once your order has been
          shipped.
        </p>
        <p className="mb-4 text-gray-700">
          All orders are processed Monday through Friday, excluding public
          holidays. Orders placed after 5 PM or on weekends will be processed on
          the following business day.
        </p>
      </section>

      {/* Shipping Timeframes */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-600">
          2. Shipping Timeframes
        </h2>
        <p className="mb-4 text-gray-700">
          We offer various shipping options depending on your location. Please
          note that delivery times are estimated from the date of dispatch, not
          the date of order.
        </p>
        <ul className="list-disc ml-8 mb-4 text-gray-700">
          <li>
            <span className="font-semibold">Domestic Shipping (Within India):</span>{" "}
            Deliveries typically take <strong>5-7 business days</strong> after
            dispatch, depending on your location.
          </li>
          <li>
            <span className="font-semibold">International Shipping:</span>{" "}
            Deliveries typically take <strong>10-15 business days</strong>,
            depending on the destination and customs clearance.
          </li>
        </ul>
        <p className="mb-4 text-gray-700">
          Please note that these timeframes are estimates and may vary due to
          external factors beyond our control (such as customs delays for
          international orders or delivery service disruptions).
        </p>
      </section>

      {/* Shipping Charges */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-600">
          3. Shipping Charges
        </h2>
        <p className="mb-4 text-gray-700">
          Shipping charges are calculated based on your location and the weight
          of the products. The final shipping cost will be displayed at
          checkout, prior to completing your purchase.
        </p>
        <p className="mb-4 text-gray-700">
          <strong>Domestic Shipping (Within India):</strong> We offer free
          shipping on orders over ₹999. For orders
          below this threshold, a nominal shipping fee will apply.
        </p>
        <p className="mb-4 text-gray-700">
          <strong>International Shipping:</strong> Shipping charges for
          international orders will vary depending on the destination and will
          be calculated at checkout. Any additional customs fees, taxes, or
          duties are the responsibility of the customer.
        </p>
      </section>

      {/* Tracking Your Order */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-600">
          4. Tracking Your Order
        </h2>
        <p className="mb-4 text-gray-700">
          Once your order is shipped, we will provide you with a tracking number
          via email or SMS. You can use this number to track your order through
          our courier partner’s website. If you have any issues with tracking
          your order, please reach out to our customer service team at{" "}
          <a href="mailto:allblueee2024@gmail.com" className="text-blue-500">
            allblueee2024@gmail.com
          </a>
          .
        </p>
      </section>

      {/* Delivery Issues */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-600">
          5. Delivery Issues
        </h2>
        <p className="mb-4 text-gray-700">
          In case of any delivery issues, such as a delayed or missing package,
          please contact us within <strong>48 hours</strong> of the estimated
          delivery date. We will work with the shipping carrier to resolve the
          issue as quickly as possible.
        </p>
        <p className="mb-4 text-gray-700">
          If the package is marked as delivered, but you have not received it,
          please check with neighbors or other household members. If the package
          cannot be located, please notify us immediately.
        </p>
      </section>

      {/* Address Changes */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-600">
          6. Address Changes
        </h2>
        <p className="mb-4 text-gray-700">
          If you need to change your shipping address after placing an order,
          please contact us at{" "}
          <a href="mailto:allblueee2024@gmail.com" className="text-blue-500">
            allblueee2024@gmail.com
          </a>{" "}
          within 24 hours. Once the order has been shipped, we cannot modify the
          delivery address.
        </p>
      </section>

      {/* Contact Us */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-600">
          7. Contact Us
        </h2>
        <p className="mb-4 text-gray-700">
          If you have any further questions or concerns regarding our shipping
          policy, feel free to reach out:
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

export default ShippingPolicy;
