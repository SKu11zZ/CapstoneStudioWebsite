import { FormEvent, useState } from "react";
import { recruitment } from "../../data/recruitment";
import { sectionCopies } from "../../data/siteContent";
import { useLanguage } from "../../i18n/LanguageContext";
import { SectionHeading } from "../SectionHeading";

export function PlayerRecruitment() {
  const { language } = useLanguage();
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage(recruitment.form.success[language]);
  }

  return (
    <section className="page-section recruitment-section" id="recruitment">
      <SectionHeading copy={sectionCopies.recruitment} />
      <div className="recruitment-layout">
        <div className="recruitment-cards">
          {recruitment.types.map((type) => (
            <article className="recruitment-card" key={type.title.en}>
              <h3>{type.title[language]}</h3>
              <p>{type.body[language]}</p>
            </article>
          ))}
        </div>
        <form className="recruitment-form" onSubmit={handleSubmit}>
          <label>
            <span>{recruitment.form.name[language]}</span>
            <input name="name" type="text" autoComplete="name" />
          </label>
          <label>
            <span>{recruitment.form.email[language]}</span>
            <input name="email" type="email" autoComplete="email" />
          </label>
          <label>
            <span>{recruitment.form.interest[language]}</span>
            <select name="interest" defaultValue={recruitment.types[0].title[language]}>
              {recruitment.types.map((type) => (
                <option value={type.title[language]} key={type.title.en}>
                  {type.title[language]}
                </option>
              ))}
            </select>
          </label>
          <button className="button button-primary" type="submit">
            {recruitment.form.submit[language]}
          </button>
          <a className="button button-secondary" href={`mailto:${recruitment.email}`}>
            {recruitment.ctas.feedback[language]}
          </a>
          <p className="form-note" aria-live="polite">
            {message || recruitment.ctas.join[language]}
          </p>
        </form>
      </div>
    </section>
  );
}
