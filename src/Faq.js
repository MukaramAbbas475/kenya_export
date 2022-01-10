import React from "react";
import Footer from "./footer";
import Info from "./info";
import NavBar from "./navBar";
import "./rough.css";

const FAQ= () => {
  return (
    <>
      <Info />
      <div className="text_color3"><NavBar /></div>
      <div>
          <p className="text_color3">
          Text messaging, or texting, is the act of composing and sending
            electronic messages, typically consisting of alphabetic and numeric
            characters, between two or more users of mobile devices,
            desktops/laptops, or another type of compatible computer. Text
            messages may be sent over a cellular network, or may also be sent
            via an Internet connection. The term originally referred to messages
            sent using the Short Message Service (SMS). It has grown beyond
            alphanumeric text to include multimedia messages using the
            Multimedia Messaging Service (MMS) containing digital images,
            videos, and sound content, as well as ideograms known as emoji
            (happy faces, sad faces, and other icons), and instant messenger
            applications (usually the term is used when on mobile devices). Text
            messages are used for personal, family, business and social
            purposes. Governmental and non-governmental organizations use text
            messaging for communication between colleagues. In the 2010s, the
            sending of short informal messages became an accepted part of many
            cultures, as happened earlier with emailing.[1] This makes texting a
            quick and easy way to communicate with friends, family and
            colleagues, including in contexts where a call would be impolite or
            inappropriate (e.g., calling very late at night or when one knows
            the other person is busy with family or work activities). Like
            e-mail and voicemail and unlike calls (in which the caller hopes to
            speak directly with the recipient), texting does not require the
            caller and recipient to both be free at the same moment; this
            permits communication even between busy individuals. Text messages
            can also be used to interact with automated systems, for example, to
            order products or services from e-commerce websites, or to
            participate in online contests. Advertisers and service providers
            use direct text marketing to send messages to mobile users about
            promotions, payment due dates, and other notifications instead of
            using postal mail, email, or voicemail.

          </p>
      </div>

      <Footer />
    </>
  );
};
export default FAQ;
