import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "React",
    Svg: require("@site/static/img/undraw_react_re_g3ui.svg").default,
    description: (
      <>
        React là thư viện <code> JavaScript </code> phổ biến nhất để xây dựng
        giao diện người dùng (UI). Nó cho tốc độ phản hồi tuyệt vời khi user
        nhập liệu bằng cách sử dụng phương pháp mới để render trang web.
      </>
    ),
  },
  {
    title: "JavaScript frameworks",
    Svg: require("@site/static/img/undraw_javascript_frameworks_-8-qpc.svg")
      .default,
    description: (
      <>
        Thực chất đó là các đoạn code được viết sẵn bằng ngôn ngữ lập trình
        JavaScript, tạo nên một bộ khung có sẵn. Nó chứa các trình biên dịch,
        diễn dịch, các thư viện,… Những dòng code được viết sẵn trong framework
        có thể được sử dụng cho các tính năng hoặc các tác vụ lập trình thông
        thường.
      </>
    ),
  },
  {
    title: "HTML/CSS/JAVASCRIPT",
    Svg: require("@site/static/img/undraw_static_assets_rpm6.svg").default,
    description: (
      <>
        HTML (Hypertext Markup Language) là ngôn ngữ đánh dấu để tạo cấu trúc
        trang web. CSS (Cascading Style Sheets) định dạng và trang trí trang.
        JavaScript là ngôn ngữ tương tác làm cho trang web trở nên động đáo và
        linh hoạt. Cùng nhau, chúng tạo nên trải nghiệm web đa dạng và hấp dẫn.
      </>
    ),
  },
  
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
