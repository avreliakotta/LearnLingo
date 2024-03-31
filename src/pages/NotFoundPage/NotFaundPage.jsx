import css from "./not-faund-page.module.css";
import InfoBlock from "../../components/InfoBlock/InfoBlock";
import defaultImg from "../../img/default_img.png"

const NotFaundPage=()=>{
  
    return(
      <main>
  <section className={css.heroWrapper}>
                <div className={css.contentWrapper}>
                    <h1 className={css.heroTitle}>Unlock your potential with the best <span className={css.part}>language</span> tutors</h1>
                    <p className={css.heroText}>Embark on an Exciting Language Journey with Expert Language Tutors: Elevate your language proficiency to new heights by connecting with highly qualified and experienced tutors.</p>
                    <button type="button" className={css.heroBtn}>Get started</button>
                </div>
                <div className={css.imgThumb}>
                <img src={defaultImg} alt="default" className={css.heroImg}/>
                </div>

            </section>
            <InfoBlock additionalClass={css.notFoundInfoBlock}/>
      </main>  
    )
}
export default NotFaundPage;