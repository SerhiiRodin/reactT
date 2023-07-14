// import Head from "./Head";
import data from "../../data.json";
import { Head } from "../Head/Head";

// CSS кампонент in JS (библиотека styled-components)
import { Container, Photo } from "./Card.styled";

// Модули CSS
// import clsx from "clsx";
// import css from "./Card.module.css";
//
// export const Card = ({ isOnline }) => {
//   return data.map((el) => {
//     return (
//       <div
//         key={el.id}
//         // className={
//         //   isOnline ? `${css.main} ${css.blue}` : `${css.main} ${css.red}`
//         // }
//         // Через билиотеку clsx
//         // className={clsx(css.main, isOnline && css.blue, !isOnline && css.red)}
//         // Или
//         className={clsx(css.main, {
//           [css.blue]: isOnline,
//           [css.red]: !isOnline,
//         })}
//       >
//         <img src={el.url} className={css.photo} alt={el.title} />
//         <div className="card-body">
//           <h5>Card title: {el.title}</h5>
//           <Head id="35" clas="card-title">
//             <p>qwe</p>
//             <div>qq</div>
//           </Head>
//           <a href="http">Go somewhere</a>
//         </div>
//       </div>
//     );
//   });
// };

export const Card = ({ isOnline}) => {
  return data.map((el) => {
    return (
      <Container key={el.id} ishide={isOnline}>
        <Photo src={el.url} alt={el.title} />
        <div>
          <h5>Card title: {el.title}</h5>
          <Head id="35" clas="card-title">
            <p>qwe</p>
            <div>qq</div>
          </Head>
          <a href="http">Go somewhere</a>
        </div>
      </Container>
    );
  });
};

// Bootstrap
// export const Card = () => {
//   return data.map((el) => {
//     return (
//       <div key={el.id} className="card mx-auto my-2" style={{ width: `18rem` }}>
//         <img src={el.url} className="card-img-top" alt={el.title} />
//         <div className="card-body">
//           <h5 className="card-title">Card title: {el.title}</h5>
//           <Head id="35" clas="card-title">
//             <p>qwe</p>
//             <div>qq</div>
//           </Head>
//           <a href="http" className="btn btn-primary">
//             Go somewhere
//           </a>
//         </div>
//       </div>
//     );
//   });
// };
