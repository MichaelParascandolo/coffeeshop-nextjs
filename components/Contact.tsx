const Contact = () => {
  const styles = {
    itemHeader: "pt-2 text-lightBrown text-[20px] font-mono",
    item: "pt-0 text-white text-[18px] font-nav",
    bar: "h-0.5 bg-gray-500 rounded-xl mt-2",
  };
  return (
    <>
      <div
        className="justify-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-[100%] mt-5"
        id="contact"
      >
        <div className="shadow-lg lg:col-span-2 shadow-gray-900 justify-center content-center flex border-solid border-2 border-[#14261D] rounded-lg bg-black/90 p-3 text-center h-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.5541401586097!2d-122.01060554951245!3d37.32938767974404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb5f4111a0ddd%3A0x9bb1de6217e67f9f!2s1%20Apple%20Park%20Way%2C%20Cupertino%2C%20CA%2095014!5e0!3m2!1sen!2sus!4v1672503021092!5m2!1sen!2sus"
            width="100%"
            height="350"
            className="rounded-2xl"
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="shadow-lg lg:col-span-1 shadow-gray-900 border-solid border-2 border-[#14261D] rounded-lg bg-black/90 p-3">
          <div className="h-auto">
            <div className="mt-0">
              <h2 className="text-4xl font-mono tracking-widest text-white">
                Contact
              </h2>
              <p className="pt-2 text-gray-400 tracking-wide">Find us.</p>
              <p className={styles.itemHeader}>Address:</p>
              <p className={styles.item}>
                1 Apple Park Way,
                <br />
                Cupertino CA, 95014
              </p>
              <div className={styles.bar} />
              <p className={styles.itemHeader}>Phone Number:</p>
              <p className={styles.item}>1 - 800 - 123 - 4567</p>
              <div className={styles.bar} />
              <p className={styles.itemHeader}>Email:</p>
              <p className={styles.item}>contact@coolbeans.com</p>
              <div className={styles.bar} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
