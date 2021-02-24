import Image from "next/image";
import { sendNotification } from "../Notification/Notification";

// Styles
import styles from "./catalogue.module.scss";

interface ICatalogue {
    handleCatalogueToggle: () => void;
}

export default function Catalogue({ handleCatalogueToggle }: ICatalogue) {

    const submitCatalogue = (e) => {
        let enquiry = {}
        let form = document.getElementById(`catalogue-form`) as HTMLFormElement;
        if (form.checkValidity() === false) {
            return
        }
        e.preventDefault();
        let formData = new FormData(form);
        formData.forEach((value, key) => enquiry[key] = value);

        fetch("http://localhost:8000/enquiry/catalogue", {
            method: "post",
            body: JSON.stringify(enquiry),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(result => {
                sendNotification("Thank you for your enquiry. We'll get back to you soon!")
            })
            .catch(err => console.log(err))
    }

    return (
        <section className={styles.catalogue}>
            <i className="icon-clear" onClick={() => handleCatalogueToggle()}></i>

            <div className="container">
                <div className={styles.content}>
                    <div className="heading">
                        <h1>C-DOC Medical Kit Order Form.</h1>
                        <span />
                    </div>

                    <form className={styles.form} id="catalogue-form" name="catalogue-form">
                        <div className={styles.intro}>
                            <div className={styles.type}>
                                <div className={styles.row}>
                                    <label>Request a Quotation</label>
                                    <input type="radio" name="type" value="Request a quotation" required />
                                </div>
                                <div className={styles.row}>
                                    <label>Request More Information</label>
                                    <input type="radio" name="type" value="Request more information" required />
                                </div>
                                <div className={styles.row}>
                                    <label>Request Advertising Space in Helpful Hints</label>
                                    <input type="radio" name="type" value="Request Advertising Space in Helpful Hints" required />
                                </div>
                            </div>
                            <div className={styles.image}>
                                <div className="next-image next-image--intrinsic">
                                    <Image src="/images/pages/services/catalogue.png" alt="C-DOC Medical Kit" width={400} height="auto" />
                                </div>
                            </div>
                        </div>


                        <div className={styles.group}>
                            <h4>C-DOC SYSTEMS</h4>
                            <div className={styles.row}>
                                <p><span>DMAC 015 Rev.4 C-DOC Offshore Medical Kit</span> (System Only - NO medical Contents)</p>
                                <input type="number" name="DMAC 015 Rev.4 C-DOC Offshore Medical Kit (System Only - NO medical Contents)" min={0} />
                            </div>
                            <div className={styles.row}>
                                <p><span>DMAC 015 Rev.4 C-DOC Offshore Medical Kit </span>(Fully Compliant with Medical Contents, excludes drug module, Portable Oxygen &amp; AED)</p>
                                <input type="number" name="DMAC 015 Rev.4 C-DOC Offshore Medical Kit (Fully Compliant with Medical Contents, excludes drug module, Portable Oxygen and AED)" min={0} />
                            </div>
                            <div className={styles.row}>
                                <p><span>DMAC 015 Rev.4 C-DOC Offshore Medical Kit</span> (Minimum Medical Content - Stretcher Bag)</p>
                                <input type="number" name="DMAC 015 Rev.4 C-DOC Offshore Medical Kit (Minimum Medical Content - Stretcher Bag)" min={0} />
                            </div>
                            <div className={styles.row}>
                                <p><span>DMAC 015 Rev.4 C-DOC Offshore Medical Kit</span> (Minimum Medical Content - Back Pack)</p>
                                <input type="number" name="HAND HELD FIRST AID KIT WITH JUMP JACKET  (First Aid Equipment) " min={0} />
                            </div>
                            <div className={styles.row}>
                                <p><span>DMAC COMPLIANCE CONSULTANCY</span> (Once off for repack, log and sterilise client's current stock into C-DOC System and list shortfalls for client. Excludes shortfalls of medical contents)</p>
                                <input type="number" name="DMAC COMPLIANCE CONSULTANCY " min={0} />
                            </div>
                        </div>

                        <div className={styles.group}>
                            <h4>C-DOC SYSTEMS MODULES (Includes Medical Content)</h4>
                            <div className={styles.row}>
                                <p>Reflective Jacket</p>
                                <input type="number" name="Reflective Jacket" min={0} />
                            </div>
                            <div className={styles.row}>
                                <p> Hand Held First Aid Kit  </p>
                                <input type="number" name="Hand Held First Aid Kit " min={0} />
                            </div>
                            <div className={styles.row}>
                                <p> Module 1 Airway </p>
                                <input type="number" name="Module 1 Airway " min={0} />
                            </div>
                            <div className={styles.row}>
                                <p> Module 2 Dressings </p>
                                <input type="number" name=" Module 2 Dressings" min={0} />
                            </div>
                            <div className={styles.row}>
                                <p> Module 3 IV Access (includes spring loaded IO) </p>
                                <input type="number" name="Module 3 IV Access (includes spring loaded IO) " min={0} />
                            </div>
                            <div className={styles.row}>
                                <p> Module 3 IV Access (includes manual IO) </p>
                                <input type="number" name="Module 3 IV Access (includes manual IO) " min={0} />
                            </div>
                            <div className={styles.row}>
                                <p> Module 4 Sutures </p>
                                <input type="number" name="Module 4 Sutures " min={0} />
                            </div>
                            <div className={styles.row}>
                                <p> Module 5 Chest Drain </p>
                                <input type="number" name="Module 5 Chest Drain " min={0} />
                            </div>
                            <div className={styles.row}>
                                <p>Module 6 Urinary  </p>
                                <input type="number" name="Module 6 Urinary " min={0} />
                            </div>
                            <div className={styles.row}>
                                <p> Module 7 Diagnostics </p>
                                <input type="number" name="Module 7 Diagnostics " min={0} />
                            </div>
                            <div className={styles.row}>
                                <p> Module 8 Needles / Syringes </p>
                                <input type="number" name="Module 8 Needles / Syringes " min={0} />
                            </div>
                        </div>

                        <div className={styles.group}>
                            <h4>DMAC 015 AIR DIVING SUPPORT EQUIPMENT</h4>
                            <div className={styles.row}>
                                <p>Automated External Defibrillator (AED)</p>
                                <input type="number" name="Automated External Defibrillator (AED)" min={0} />
                            </div>
                            <div className={styles.row}>
                                <p>BIBS Bag Valve Mask Connector (BIBS) (SCOTTS BIBS excluded)</p>
                                <input type="number" name="BIBS Bag Valve Mask Connector (BIBS) (SCOTTS BIBS excluded)" min={0} />
                            </div>
                            <div className={styles.row}>
                                <p>Air Chamber (AC) Medical Kit</p>
                                <input type="number" name="Air Chamber (AC) Medical Kit" min={0} />
                            </div>
                            <div className={styles.row}>
                                <p>Advanced Adult Airway (AAA)</p>
                                <input type="number" name="Advanced Adult Airway (AAA)" min={0} />
                            </div>
                        </div>

                        <div className={styles.group}>
                            <h4>DMAC 015 SATURATION DIVING SUPPORT EQUIPMENT</h4>
                            <div className={styles.row}>
                                <p>Saturation Chamber (SC) Living Chamber Medical Kit</p>
                                <input type="number" name="Saturation Chamber (SC) Living Chamber Medical Kit" min={0} />
                            </div>
                            <div className={styles.row}>
                                <p>Diving Bell (DB) Medical Kit</p>
                                <input type="number" name="Diving Bell (DB) Medical Kit" min={0} />
                            </div>
                            <div className={styles.row}>
                                <p>Hyperbaric Evacuation System (HES) Medical Kit (12 PAX)</p>
                                <input type="number" name="Hyperbaric Evacuation System (HES) Medical Kit (12 PAX)" min={0} />
                            </div>
                        </div>

                        <div className={styles.group}>
                            <h4>ADDITIONAL SUPPLIES</h4>
                            <div className={styles.row}>
                                <p>Portable Oxygen</p>
                                <input type="number" name="Portable Oxygen" min={0} />
                            </div>
                            <div className={styles.row}>
                                <p>AED</p>
                                <input type="number" name="AED" min={0} />
                            </div>
                            <div className={styles.row}>
                                <p>DMAC 015 Prescription Pharmaceutical Module (Drug Module)</p>
                                <input type="number" name="DMAC 015 Prescription Pharmaceutical Module (Drug Module)" min={0} />
                            </div>
                            <div className={styles.row}>
                                <p>Inshore Commercial Dive Operations Compliant Medical Kit</p>
                                <input type="number" name="Inshore Commercial Dive Operations Compliant Medical Kit" min={0} />
                            </div>
                        </div>



                        <div className={`${styles.group} ${styles.contact}`}>
                            <h4>YOUR DETAILS</h4>
                            <div className={styles.row}>
                                <label htmlFor="Name">Name</label>
                                <input type="text" name="Name" required />
                            </div>
                            <div className={styles.row}>
                                <label htmlFor="Company">Company</label>
                                <input type="text" name="Company" required />
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
                                <label htmlFor="City">City</label>
                                <input type="text" name="City" required />
                            </div>
                            <div className={styles.row}>
                                <label htmlFor="Country">Country</label>
                                <input type="text" name="Country" required />
                            </div>

                        </div>


                        <button type="submit" onClick={(e) => submitCatalogue(e)}>Submit</button>
                    </form>
                </div>

            </div>
        </section>
    )
}
