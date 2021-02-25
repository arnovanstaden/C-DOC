import { sendNotification } from "../Notification/Notification";

// Styles
import styles from "./courses.module.scss";

interface ICourses {
    handleCoursesToggle: () => void;
}

export default function Courses({ handleCoursesToggle }: ICourses) {

    const submitCourses = (e) => {
        let enquiry = {}
        let form = document.getElementById(`courses-form`) as HTMLFormElement;
        if (form.checkValidity() === false) {
            return
        }
        e.preventDefault();
        let formData = new FormData(form);
        formData.forEach((value, key) => enquiry[key] = value);

        fetch(`${process.env.NEXT_PUBLIC_API_URL}/enquiry/courses`, {
            method: "post",
            body: JSON.stringify(enquiry),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(result => {
                sendNotification("Thank you for your enquiry. We'll get back to you soon!");
                form.reset()
                handleCoursesToggle()
            })
            .catch(err => console.log(err))
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
                            <div className={styles.row}>
                                <label>IMCA Diver Medic Full Course</label>
                                <input type="radio" name="Type" value="IMCA Diver Medic Full Course" required />
                            </div>
                            <div className={styles.row}>
                                <label>IMCA Diver Medic Refresher Course</label>
                                <input type="radio" name="Type" value="IMCA Diver Medic Refresher Course" required />
                            </div>
                            <div className={styles.row}>
                                <label>IMCA Trainee Air Diving Supervisor</label>
                                <input type="radio" name="Type" value="IMCA Trainee Air Diving Supervisor" required />
                            </div>
                            <div className={styles.row}>
                                <label>DMAC 11 First Aid and Oxygen Administration for the Dive Team</label>
                                <input type="radio" name="Type" value="DMAC 11 First Aid and Oxygen Administration for the Dive Team" required />
                            </div>
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

                        </div>
                        <button className="button" type="submit" onClick={(e) => submitCourses(e)}>
                            <p>Submit</p>
                        </button>
                    </form>
                </div>

            </div>
        </section>
    )
}
