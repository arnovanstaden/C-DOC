import { useState, useRef } from "react";
import { sendNotification } from "../Notification/Notification";
import axios from 'axios';

// Styles
import styles from "./courses.module.scss";

interface ICourses {
  handleCoursesToggle: () => void;
  courses: any[]
}

export default function Courses({ handleCoursesToggle, courses }: ICourses) {

  // State
  const [selectedCourse, setSelectedCourse] = useState(undefined);
  const [coupon, setCoupon] = useState(undefined)
  const couponRef = useRef<HTMLInputElement>()

  // Handlers

  const handleSelectCourse = (course) => {
    setSelectedCourse(course)
  }

  const handleCouponVerification = (e) => {
    e.preventDefault();
    const code = couponRef.current.value.trim();
    if (code === "") {
      return sendNotification("Please enter a valid coupon code");
    }
    sendNotification("Validating Code. Hang tight...");
    axios({
      method: "post",
      url: `${process.env.NEXT_PUBLIC_API_URL}/coupons/validate`,
      data: {
        code
      }
    }).then(result => {
      sendNotification(result.data.message);
      setCoupon({
        discount: result.data.discount,
        code: result.data.code
      })
    })
      .catch(err => {
        console.log(err)
        sendNotification(err.response.data.message);
      })
  }

  const handleSubmitBooking = (e) => {
    let enquiry = {}
    let form = document.getElementById(`courses-form`) as HTMLFormElement;
    if (form.checkValidity() === false) {
      return
    }
    e.preventDefault();
    let formData = new FormData(form);
    for (var key of formData.keys()) {
      enquiry[key] = formData.get(key)
    }

    // Delete invalid dates from selects
    if (!selectedCourse.dates || selectedCourse.dates.length < 1) {
      delete enquiry["Course Date"]
    } else {
      const selectedDate = document.getElementById(selectedCourse.id) as HTMLInputElement;
      enquiry["Course Date"] = selectedDate.value;
    }
    delete enquiry["Proof of Payment"];

    // Add Coupon + Total
    if (coupon) {
      enquiry["Coupon Discount"] = `${coupon.discount}%`;
    }
    const total = document.getElementById("booking-total").innerHTML;
    enquiry["Booking Total"] = `${total}`;

    formData = new FormData();
    formData.append("enquiry", JSON.stringify(enquiry));

    let fileElement = document.getElementById('ProofOfPayment') as HTMLInputElement;
    let ProofOfPayment = fileElement.files[0];

    formData.append("ProofOfPayment", ProofOfPayment);
    sendNotification("Booking Course. Hang tight...");

    axios({
      method: "post",
      url: `${process.env.NEXT_PUBLIC_API_URL}/courses/book`,
      data: formData
    }).then(result => {
      sendNotification("Thank you for your course booking. We'll get back to you soon!");
      form.reset()
      handleCoursesToggle()
      setCoupon(undefined)
      setSelectedCourse(undefined)
    })
      .catch(err => console.log(err))
  }


  const CourseDates = (course) => {
    return (
      <div className={styles.date}>
        <span>Select Date:</span>
        <select name="Course Date" id={course.id}>
          {course.dates.map((date, index) => (
            <option value={`${date.from} - ${date.to}`} key={index}>{date.from} - {date.to}</option>
          ))}
        </select>
      </div>

    )
  }

  function CourseList() {
    return (
      <>
        {
          courses.map((course, index) => (
            <div className={styles.row} key={index}>
              <div className={styles.details}>
                <label>{course.name}</label>
                <p className={styles.price}>R {course.price}</p>
                {course.dates ? <CourseDates {...course} /> : null}
                <p>{course.description}</p>
              </div>
              <input type="radio" name="Type" required
                value={course.name}
                onChange={() => handleSelectCourse(course)}
                checked={course === selectedCourse ? true : false}
              />
            </div>
          ))
        }
      </>
    )
  }

  return (
    <section className={styles.courses}>
      <i className="icon-clear" onClick={() => handleCoursesToggle()}></i>

      <div className="container">
        <div className={styles.content}>
          <div className="heading">
            <h1>Training Course Booking.</h1>
            <span />
          </div>

          <form className={styles.form} id="courses-form" name="courses-form">
            <div className={styles.type}>
              <CourseList />
            </div>

            <div className={`${styles.group} ${styles.contact}`}>
              <h4>YOUR DETAILS</h4>
              <div className={styles.row}>
                <label htmlFor="Name">Name</label>
                <input type="text" name="Name" required />
              </div>
              <div className={styles.row}>
                <label htmlFor="Email">Email</label>
                <input type="email" name="Email" required />
              </div>
              <div className={styles.row}>
                <label htmlFor="Phone">Phone</label>
                <input type="phone" name="Phone" required />
              </div>
              <div className={styles.row}>
                <label htmlFor="Country">Country</label>
                <input type="text" name="Country" required />
              </div>
              <div className={styles.paymentDetails}>
                <h4>Payment Details</h4>
                <ul>
                  <li><span>Bank:</span> ABSA Bank</li>
                  <li><span>Sort Code:</span> 632 005</li>
                  <li><span>Account Number:</span> 405 - 119 - 0044</li>
                  <li><span>SWIFT code:</span> ABSAZAJJXXX</li>
                  <li><span>Reference :</span> FIRST NAME/SURNAME/COURSE</li>
                  <li><span>Amount :</span>
                    <p className={styles.total}
                      id="booking-total"
                    >
                      {selectedCourse ?
                        `R ${selectedCourse.price - (coupon ? selectedCourse.price * (coupon.discount / 100) : 0)}`
                        : "Select Course"}
                    </p>
                  </li>

                </ul>
                <div className={styles.coupon}>
                  <label>Coupon Code:</label>
                  <input type="text" name="coupon-code" ref={couponRef} />
                  <button className="button button--border" onClick={handleCouponVerification}>
                    <p>Apply Code</p>
                  </button>
                </div>
              </div>
              <div className={styles.row}>
                <label htmlFor="Proof of Payment">Proof of Payment</label>
                <input type="file" name="Proof of Payment" id="ProofOfPayment" required accept="application/pdf" />
              </div>
            </div>
            <button className="button" type="submit" onClick={(e) => handleSubmitBooking(e)}>
              <p>Submit</p>
            </button>
          </form>
        </div>

      </div>
    </section >
  )
}


