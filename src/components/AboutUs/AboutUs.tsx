import { Button } from "@/components";
import styles from "./AboutUs.module.css";
import Image from "next/image";

export const AboutUs = () => {
  return (
    <section className={styles.section}>
      <div className="space-y-32 md:space-y-64 max-w-[1920px] mx-auto">
        <div className={styles.container}>
          <Image
            src="/images/about/positive.webp"
            alt="Positive"
            width={400}
            height={400}
            data-aos="fade-right"
          />
          <div className={styles.text__container} data-aos="fade-right">
            <h3 className={styles.title}>Masculinité Positive​</h3>
            <p className={styles.description}>
              Renforcez votre confiance et votre estime de soi avec 1908 par
              LACRIM.
            </p>
            <p className={styles.description}>
              Chacun de nos produits est conçu pour instiller un sentiment de
              bien-être et de luxe.
            </p>
            <p className={styles.description}>
              Découvrez notre collection diversifiée et libérez le sentiment de
              confort et de confiance en vous-même.
            </p>
          </div>
        </div>
        <div className={styles.container__reverse}>
          <Image
            src="/images/about/natural.webp"
            alt="Positive"
            width={400}
            height={400}
            data-aos="fade-left"
          />
          <div className={styles.text__container} data-aos="fade-left">
            <h3 className={styles.title}>
              Ingrédients Naturels, Adaptés pour Vous
            </h3>
            <p className={styles.description}>
              Notre ligne de soins de la peau est conçue avec des ingrédients
              naturels, chacun sélectionné pour ses bienfaits uniques.
            </p>
            <p className={styles.description}>
              De la puissance rajeunissante des huiles essentielles aux
              propriétés purifiantes du charbon actif, nos produits sont conçus
              pour répondre à vos besoins quotidiens.
            </p>
          </div>
        </div>
        <div className={styles.container}>
          <Image
            src="/images/about/good.webp"
            alt="Positive"
            width={400}
            height={400}
            data-aos="fade-right"
          />
          <div className={styles.text__container} data-aos="fade-right">
            <h3 className={styles.title}>Naturellement Efficace</h3>
            <p className={styles.description}>
              Boost your confidence and self-esteem with 1908 by LACRIM.
            </p>
            <p className={styles.description}>
              Nos produits sont conçus pour répondre à tous vos besoins
              capillaires et cutanés, afin que vous passiez moins de temps à
              essayer de paraître bien et plus de temps à être réellement beau.
            </p>
            <p className={styles.description}>
              Que ce soit la peau sèche, la barbe clairsemée, les cheveux
              ternes, les ridules ou les dommages causés par le soleil, nous
              avons ce qu&apos;il vous faut.
            </p>
            <div className="self-end pt-16">
              <Button fontSize="20px" buttonColor="beige" href="/products">
                Consulter notre boutique
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
