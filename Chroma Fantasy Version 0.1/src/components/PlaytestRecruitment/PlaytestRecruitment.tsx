import { useState } from "react";
import { useLanguage } from "../../i18n/LanguageContext";
import { SectionHeader } from "../common/SectionHeader";
import "./PlaytestRecruitment.css";

const focusItems = {
  zh: [
    "开放世界探索是否自然",
    "剧情任务是否有旅途感",
    "角色关系是否有吸引力",
    "场景是否容易被记住",
    "镜头和氛围是否足够电影感",
    "玩家是否愿意继续探索",
  ],
  en: [
    "Whether exploration feels natural",
    "Whether narrative quests feel like journeys",
    "Whether character relationships are engaging",
    "Whether locations are memorable",
    "Whether camera mood feels cinematic",
    "Whether players want to keep exploring",
  ],
};

export function PlaytestRecruitment() {
  const { t, language } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="section playtest" id="playtest" aria-labelledby="playtest-title">
      <div className="section-inner playtest__inner reveal">
        <div className="playtest__copy">
          <SectionHeader
            kicker={{ zh: "Early Travelers Wanted", en: "Early Travelers Wanted" }}
            title={{ zh: "玩家招募", en: "Playtest" }}
            intro={{
              zh: "成为第一批踏入云上旧城的旅人",
              en: "Become one of the first travelers above the clouds",
            }}
          />
          <p>
            {t({
              zh: "我们正在寻找愿意体验早期版本的玩家，帮助我们测试开放世界探索节奏、剧情任务体验、角色关系、场景记忆点、镜头氛围和美术表现",
              en: "We are looking for early players to help us test exploration pacing, narrative quests, character relationships, memorable locations, cinematic mood, and visual presentation",
            })}
          </p>
          <div className="playtest-focus">
            {focusItems[language].map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <div className="playtest__actions">
            <a className="soft-button" href="#playtest-form">
              {t({ zh: "申请试玩", en: "Apply for Playtest" })}
            </a>
            <a className="soft-button soft-button--subtle" href="#contact">
              {t({ zh: "加入社群", en: "Join Community" })}
            </a>
            <a className="soft-button soft-button--subtle" href="#contact">
              {t({ zh: "订阅更新", en: "Subscribe" })}
            </a>
          </div>
        </div>

        <form
          className="playtest-form"
          id="playtest-form"
          onSubmit={(event) => {
            event.preventDefault();
            setSubmitted(true);
          }}
        >
          <label>
            <span>{t({ zh: "昵称", en: "Nickname" })}</span>
            <input name="nickname" type="text" required />
          </label>
          <label>
            <span>{t({ zh: "邮箱", en: "Email" })}</span>
            <input name="email" type="email" required />
          </label>
          <label>
            <span>{t({ zh: "喜欢的游戏类型", en: "Favorite game type" })}</span>
            <input name="favorite" type="text" />
          </label>
          <label>
            <span>{t({ zh: "愿意反馈的内容", en: "Feedback focus" })}</span>
            <textarea name="feedback" rows={4} />
          </label>
          <button className="soft-button" type="submit">
            {t({ zh: "提交申请", en: "Submit" })}
          </button>
          {submitted ? (
            <p className="playtest-form__success" role="status">
              {t({ zh: "申请已记录，我们会在测试开放时联系你", en: "Application saved, we will contact you when testing opens" })}
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}
