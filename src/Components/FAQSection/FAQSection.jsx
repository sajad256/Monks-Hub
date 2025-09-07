import React from "react";
import Accordion from "react-bootstrap/Accordion";

export default function FAQSection() {
  return (
    <>
      <div className="mt-10">
        <div className="info text-center container md:flex md:flex-col md:items-center">
          <h1 className="text-4xl md:w-full w-72 font-bold xl:text-6xl">
            Frequently Asked Questions{" "}
          </h1>
          <p className="mt-4 md:w-96 xl:w-6/12">
            Frequently Asked Questions offers quick answers to common queries,
            guiding users through features and functionalities effortlessly.
          </p>
        </div>
        <Accordion
          defaultActiveKey="0"
          className="container md:flex md:flex-col md:justify-center md:items-center mt-8"
        >
          <Accordion.Item eventKey="0" className="font-bold md:w-10/12">
            <Accordion.Header className="">
              <span className="text-2xl">
                Can I Track My Assignments and Grades?
              </span>
            </Accordion.Header>
            <Accordion.Body>
              Yes, the LMS offers a “Gradebook” where students can view their
              grades, monitor feedback on assignments, and check upcoming due
              dates. Instructors can also post grades and comments for each
              submission.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="mt-4 md:w-10/12">
            <Accordion.Header>
              <span className="text-2xl font-bold ">
                {" "}
                Does the LMS support video lessons and live classes?
              </span>
            </Accordion.Header>
            <Accordion.Body>
              Yes, the LMS offers a “Gradebook” where students can view their
              grades, monitor feedback on assignments, and check upcoming due
              dates. Instructors can also post grades and comments for each
              submission.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="mt-4 md:w-10/12">
            <Accordion.Header>
              <span className="text-2xl font-bold">
                How can I communicate with my instructor?
              </span>
            </Accordion.Header>
            <Accordion.Body>
              Yes, the LMS offers a “Gradebook” where students can view their
              grades, monitor feedback on assignments, and check upcoming due
              dates. Instructors can also post grades and comments for each
              submission.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className="mt-4 md:w-10/12">
            <Accordion.Header>
              <span className="text-2xl font-bold ">
                What support is available for students and instructors?
              </span>
            </Accordion.Header>
            <Accordion.Body>
              Yes, the LMS offers a “Gradebook” where students can view their
              grades, monitor feedback on assignments, and check upcoming due
              dates. Instructors can also post grades and comments for each
              submission.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4" className="mt-4 md:w-10/12">
            <Accordion.Header>
              <span className="text-2xl font-bold">
                Are there interactive features for students?
              </span>
            </Accordion.Header>
            <Accordion.Body>
              Yes, the LMS offers a “Gradebook” where students can view their
              grades, monitor feedback on assignments, and check upcoming due
              dates. Instructors can also post grades and comments for each
              submission.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
}
