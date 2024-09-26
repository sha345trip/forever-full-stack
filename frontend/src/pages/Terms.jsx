import React from "react";

const Terms = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Terms and Conditions</h1>
      <p className="text-sm text-gray-500 mb-8 text-center">Effective Date: 25th September, 2024</p>

      <p className="text-lg mb-4">
        These Terms and Conditions ("Agreement") govern the use of the website{" "}
        <span className="text-blue-500">www.allblueee.com</span> ("Website") and the
        purchase of products from All Blueee Store ("we," "us," or "our"),
        located in Rajasthan, India. By using our Website or purchasing our
        products, you accept and agree to comply with this Agreement. If you do
        not agree with these Terms and Conditions, you must discontinue using
        the Website.
      </p>

      {/* Definitions */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Definitions</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>1.1. Customer refers to the person or entity purchasing goods from the Website.</li>
          <li>1.2. Product refers to any goods available for sale on our Website, including blue pottery decor and related items.</li>
          <li>1.3. Order refers to the request for the purchase of Products by a Customer on the Website.</li>
          <li>1.4. Website refers to www.allblueee.com operated by All Blueee Store.</li>
        </ul>
      </section>

      {/* Eligibility */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. Eligibility</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>2.1. To place an Order and use this Website, you must be:
            <ul className="list-decimal ml-6">
              <li>At least 18 years of age.</li>
              <li>Capable of entering into legally binding contracts as per the Indian Contract Act, 1872.</li>
            </ul>
          </li>
          <li>2.2. By placing an Order, you warrant that you meet these eligibility requirements.</li>
        </ul>
      </section>

      {/* Product Information and Accuracy */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. Product Information and Accuracy</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>3.1. All Blueee Store strives to ensure that all Product descriptions, images, prices, and other information displayed on the Website are accurate and up-to-date. However, minor differences in appearance may occur due to handcrafting or variations in display screens.</li>
          <li>3.2. We reserve the right to modify or update any information, including prices, without prior notice. In case of an error in pricing or product information, we reserve the right to cancel the order and refund the amount paid.</li>
        </ul>
      </section>

      {/* Placing an Order */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. Placing an Order</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>4.1. To place an Order on the Website, you must provide complete and accurate information. By placing an Order, you agree to pay the full price of the Product, including shipping and applicable taxes.</li>
          <li>4.2. After placing an Order, you will receive a confirmation email with details of your Order. This confirmation does not guarantee acceptance of the Order. We reserve the right to cancel Orders that violate these Terms.</li>
        </ul>
      </section>

      {/* Payment Terms */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">5. Payment Terms</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>5.1. Payment Methods: We accept payments through [insert payment methods: credit cards, debit cards, UPI, wallets, etc.].</li>
          <li>5.2. Security: We use secure payment gateways and do not store any sensitive payment information on our Website. Payments are processed in compliance with the applicable laws of India, including but not limited to the Payment and Settlement Systems Act, 2007.</li>
          <li>5.3. GST Compliance: All prices mentioned on the Website include the applicable Goods and Services Tax (GST) in accordance with the GST Act, 2017.</li>
        </ul>
      </section>

      {/* Shipping and Delivery */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">6. Shipping and Delivery</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>6.1. Shipping Locations: We offer shipping across India and internationally. Shipping rates and delivery timelines will vary based on your location and will be displayed during checkout.</li>
          <li>6.2. Delivery Timeline: Delivery timelines are estimates and may vary due to external factors, including customs, courier service delays, or force majeure events. We are not responsible for delays caused by the shipping provider.</li>
          <li>6.3. Risk of Loss: All Blueee Store transfers the risk of loss or damage to the Products to you once the Product is handed over to the shipping carrier. However, we will assist you in tracking and resolving shipping issues.</li>
          <li>6.4. Customs and Duties: International shipments may be subject to customs duties and taxes. The recipient is responsible for any such charges.</li>
        </ul>
      </section>

      {/* Returns, Refunds, and Cancellations */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">7. Returns, Refunds, and Cancellations</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>7.1. Return Policy: If you are not satisfied with your purchase, you may return the product within 14 days of delivery, subject to the conditions mentioned in our Return and Refund Policy. Products must be unused, in their original packaging, and accompanied by proof of purchase.</li>
          <li>7.2. Refund Process: Once the returned item is inspected and approved, the refund will be processed to the original method of payment within 5-7 working days. Shipping fees and taxes, if applicable, are non-refundable.</li>
          <li>7.3. Order Cancellation: You may cancel your Order within 24 hours of placing it. Orders once shipped cannot be canceled. In the event of product unavailability, we reserve the right to cancel your Order and issue a full refund.</li>
        </ul>
      </section>

      {/* Intellectual Property Rights */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">8. Intellectual Property Rights</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>8.1. Ownership: All content on the Website, including designs, text, images, graphics, logos, and trademarks, are the property of All Blueee Store and are protected by the Copyright Act, 1957, and other applicable intellectual property laws.</li>
          <li>8.2. Use Restrictions: You may not reproduce, distribute, or otherwise exploit any content from our Website for commercial or personal purposes without prior written consent.</li>
        </ul>
      </section>

      {/* Privacy Policy */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">9. Privacy Policy</h2>
        <p>We are committed to protecting your privacy. Please refer to our Privacy Policy for detailed information about how we collect, use, and protect your personal data in accordance with the Information Technology Act, 2000, and the rules made thereunder.</p>
      </section>

      {/* Limitation of Liability */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">10. Limitation of Liability</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>10.1. To the fullest extent permitted by applicable law, All Blueee Store shall not be liable for any indirect, incidental, consequential, or punitive damages arising from your use of the Website or Products, including but not limited to loss of profits, data, or goodwill.</li>
          <li>10.2. In no event will our total liability exceed the value of the Product(s) purchased by you.</li>
        </ul>
      </section>

      {/* Indemnification */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">11. Indemnification</h2>
        <p>You agree to indemnify and hold harmless All Blueee Store, its officers, employees, and affiliates, from any claims, losses, damages, liabilities, or expenses arising out of your violation of these Terms or misuse of the Website or Products.</p>
      </section>

      {/* Governing Law and Dispute Resolution */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">12. Governing Law and Dispute Resolution</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>12.1. This Agreement shall be governed by the laws of India, without regard to its conflict of laws principles.</li>
          <li>12.2. Jurisdiction: Any disputes arising from the use of the Website or Products shall be subject to the exclusive jurisdiction of the courts in Rajasthan, India.</li>
          <li>12.3. Dispute Resolution: In case of any disputes, both parties shall first attempt to resolve the matter amicably through negotiation. If unresolved, disputes shall be submitted to arbitration under the Arbitration and Conciliation Act, 1996, with the venue of arbitration in Rajasthan.</li>
        </ul>
      </section>

      {/* Changes to the Terms */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">13. Changes to the Terms</h2>
        <p>We reserve the right to update or modify these Terms at any time without prior notice. Your continued use of the Website following any changes indicates your acceptance of the revised Terms.</p>
      </section>
     
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">14. Severability</h2>
        <p>If any provision of these Terms and Conditions is found to be unenforceable or invalid, the remaining provisions will continue to be valid and enforceable to the fullest extent permitted by law.</p>
      </section>

      {/* Contact Information */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">15. Contact Information</h2>
        <p className="mb-2">
          If you have any questions, concerns, or feedback regarding these Terms and Conditions, please contact us at:
        </p>
        <p>
          <strong>All Blueee Store</strong> <br />
          Email: <a href="mailto:allblueee2024@gmail.com" className="text-blue-500">allblueee2024@gmail.com</a> <br />
          Phone: +916367485143 <br />
          Address: A-100, Laxmi Narayan Puri, Jaipur, Rajasthan - 302003
        </p>
      </section>
    </div>
  );
};

export default Terms;
