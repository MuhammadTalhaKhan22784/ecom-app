import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const clothes = [
    {
      label: "abc",
    },
    {
      label: "abc",
    },
    {
      label: "abc",
    },
    {
      label: "abc",
    },
    {
      label: "abc",
    },
    {
      label: "abc",
    },
  ];
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid d-flex ">
          <Link
            className="navbar-logo"
            style={{ textDecoration: "none", color: "inherit" }}
            to="/"
          >
            DIBSTUFF
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="top-nav">
              <div className="input-group">
                <button
                  className="btn btn-outline-secondary custom-gray dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Catalogue
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Separated link
                    </a>
                  </li>
                </ul>
                <input
                  type="text"
                  className="form-control custom-gray"
                  placeholder="Search for items"
                  aria-label="Text input with dropdown button"
                />
              </div>
              <div className="top-btn">
                <button type="button" className="lgn-sign-btn">
                  Sign up | Log in
                </button>
                <button type="button" className="sell-btn">
                  Sell now
                </button>
                <i className="fa fa-info-circle" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div>
{/* 
        <div className="top-tabs">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="pills-women-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-women"
                type="button"
                role="tab"
                aria-controls="pills-women"
                aria-selected="true"
              >
                women
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-men-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-men"
                type="button"
                role="tab"
                aria-controls="pills-men"
                aria-selected="false"
              >
                men
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-kids-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-kids"
                type="button"
                role="tab"
                aria-controls="pills-kids"
                aria-selected="false"
              >
                kids
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-about-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-about"
                type="button"
                role="tab"
                aria-controls="pills-about"
                aria-selected="false"
              >
                about
              </button>
            </li>
          </ul>
          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="pills-women"
              role="tabpanel"
              aria-labelledby="pills-women-tab"
            >
              <div className="d-flex align-items-start">
                <div
                  className="nav flex-column nav-pills me-3"
                  id="v-pills-tab"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  <button
                    className="nav-link active"
                    id="v-pills-clothes-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-clothes"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-clothes"
                    aria-selected="true"
                  >
                    clothes
                  </button>
                  <button
                    className="nav-link"
                    id="v-pills-shoes-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-shoes"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-shoes"
                    aria-selected="false"
                  >
                    shoes
                  </button>
                  <button
                    className="nav-link"
                    id="v-pills-bags-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-bags"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-bags"
                    aria-selected="false"
                  >
                    bags
                  </button>
                  <button
                    className="nav-link"
                    id="v-pills-Accessories-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-Accessories"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-Accessories"
                    aria-selected="false"
                  >
                    Accessories
                  </button>
                  <button
                    className="nav-link"
                    id="v-pills-Beauty-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-Beauty"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-Beauty"
                    aria-selected="false"
                  >
                    Beauty
                  </button>
                </div>
                <div className="tab-content" id="v-pills-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="v-pills-clothes"
                    role="tabpanel"
                    aria-labelledby="v-pills-clothes-tab"
                  >
                    <div>
                      {
                        (clothes.map = (i, index) => {
                          <h2>{i.label[0]}</h2>;
                        })
                      }
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="v-pills-shoes"
                    role="tabpanel"
                    aria-labelledby="v-pills-shoes-tab"
                  >
                    ...
                  </div>
                  <div
                    className="tab-pane fade"
                    id="v-pills-bags"
                    role="tabpanel"
                    aria-labelledby="v-pills-bags-tab"
                  >
                    ...
                  </div>
                  <div
                    className="tab-pane fade"
                    id="v-pills-Accessories"
                    role="tabpanel"
                    aria-labelledby="v-pills-Accessories-tab"
                  >
                    ...
                  </div>
                  <div
                    className="tab-pane fade"
                    id="v-pills-Beauty"
                    role="tabpanel"
                    aria-labelledby="v-pills-Beauty-tab"
                  >
                    ...
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-men"
              role="tabpanel"
              aria-labelledby="pills-men-tab"
            >
              ...
            </div>
            <div
              className="tab-pane fade"
              id="pills-kids"
              role="tabpanel"
              aria-labelledby="pills-kids-tab"
            >
              ...
            </div>
            <div
              className="tab-pane fade"
              id="pills-about"
              role="tabpanel"
              aria-labelledby="pills-about-tab"
            >
              ...
            </div>
          </div>
        </div>
       */}
      
      </div>
      
    </React.Fragment>
  );
};

export default Navbar;

//   render() {

//     return (

//       <React.Fragment>
//         <nav className="navbar navbar-expand-lg navbar-light">
//           <div className="container-fluid d-flex ">
//             <Link
//               className="navbar-logo"
//               style={{ textDecoration: "none", color: "inherit" }}
//               to="/"
//             >
//               DIBSTUFF
//             </Link>
//             <button
//               className="navbar-toggler"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#navbarSupportedContent"
//               aria-controls="navbarSupportedContent"
//               aria-expanded="false"
//               aria-label="Toggle navigation"
//             >
//               <span className="navbar-toggler-icon" />
//             </button>
//             <div
//               className="collapse navbar-collapse"
//               id="navbarSupportedContent"
//             >
//               <div className="top-nav">
//                 <div className="input-group">
//                   <button
//                     className="btn btn-outline-secondary custom-gray dropdown-toggle"
//                     type="button"
//                     data-bs-toggle="dropdown"
//                     aria-expanded="false"
//                   >
//                     Catalogue
//                   </button>
//                   <ul className="dropdown-menu">
//                     <li>
//                       <a className="dropdown-item" href="#">
//                         Action
//                       </a>
//                     </li>
//                     <li>
//                       <a className="dropdown-item" href="#">
//                         Another action
//                       </a>
//                     </li>
//                     <li>
//                       <a className="dropdown-item" href="#">
//                         Something else here
//                       </a>
//                     </li>
//                     <li>
//                       <hr className="dropdown-divider" />
//                     </li>
//                     <li>
//                       <a className="dropdown-item" href="#">
//                         Separated link
//                       </a>
//                     </li>
//                   </ul>
//                   <input
//                     type="text"
//                     className="form-control custom-gray"
//                     placeholder="Search for items"
//                     aria-label="Text input with dropdown button"
//                   />
//                 </div>
//                 <div className="top-btn">
//                   <button type="button" className="lgn-sign-btn">
//                     Sign up | Log in
//                   </button>
//                   <button type="button" className="sell-btn">
//                     Sell now
//                   </button>
//                   <i className="fa fa-info-circle" aria-hidden="true"></i>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </nav>
//         <div>
//           <div className="top-tabs">
//             <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
//               <li className="nav-item" role="presentation">
//                 <button
//                   className="nav-link active"
//                   id="pills-women-tab"
//                   data-bs-toggle="pill"
//                   data-bs-target="#pills-women"
//                   type="button"
//                   role="tab"
//                   aria-controls="pills-women"
//                   aria-selected="true"
//                 >
//                   women
//                 </button>
//               </li>
//               <li className="nav-item" role="presentation">
//                 <button
//                   className="nav-link"
//                   id="pills-men-tab"
//                   data-bs-toggle="pill"
//                   data-bs-target="#pills-men"
//                   type="button"
//                   role="tab"
//                   aria-controls="pills-men"
//                   aria-selected="false"
//                 >
//                   men
//                 </button>
//               </li>
//               <li className="nav-item" role="presentation">
//                 <button
//                   className="nav-link"
//                   id="pills-kids-tab"
//                   data-bs-toggle="pill"
//                   data-bs-target="#pills-kids"
//                   type="button"
//                   role="tab"
//                   aria-controls="pills-kids"
//                   aria-selected="false"
//                 >
//                   kids
//                 </button>
//               </li>
//               <li className="nav-item" role="presentation">
//                 <button
//                   className="nav-link"
//                   id="pills-about-tab"
//                   data-bs-toggle="pill"
//                   data-bs-target="#pills-about"
//                   type="button"
//                   role="tab"
//                   aria-controls="pills-about"
//                   aria-selected="false"
//                 >
//                   about
//                 </button>
//               </li>
//             </ul>
//             <div className="tab-content" id="pills-tabContent">
//               <div
//                 className="tab-pane fade show active"
//                 id="pills-women"
//                 role="tabpanel"
//                 aria-labelledby="pills-women-tab"
//               >
//                 <div className="d-flex align-items-start">
//                   <div
//                     className="nav flex-column nav-pills me-3"
//                     id="v-pills-tab"
//                     role="tablist"
//                     aria-orientation="vertical"
//                   >
//                     <button
//                       className="nav-link active"
//                       id="v-pills-clothes-tab"
//                       data-bs-toggle="pill"
//                       data-bs-target="#v-pills-clothes"
//                       type="button"
//                       role="tab"
//                       aria-controls="v-pills-clothes"
//                       aria-selected="true"
//                     >
//                       clothes
//                     </button>
//                     <button
//                       className="nav-link"
//                       id="v-pills-shoes-tab"
//                       data-bs-toggle="pill"
//                       data-bs-target="#v-pills-shoes"
//                       type="button"
//                       role="tab"
//                       aria-controls="v-pills-shoes"
//                       aria-selected="false"
//                     >
//                       shoes
//                     </button>
//                     <button
//                       className="nav-link"
//                       id="v-pills-bags-tab"
//                       data-bs-toggle="pill"
//                       data-bs-target="#v-pills-bags"
//                       type="button"
//                       role="tab"
//                       aria-controls="v-pills-bags"
//                       aria-selected="false"
//                     >
//                       bags
//                     </button>
//                     <button
//                       className="nav-link"
//                       id="v-pills-Accessories-tab"
//                       data-bs-toggle="pill"
//                       data-bs-target="#v-pills-Accessories"
//                       type="button"
//                       role="tab"
//                       aria-controls="v-pills-Accessories"
//                       aria-selected="false"
//                     >
//                       Accessories
//                     </button>
//                     <button
//                       className="nav-link"
//                       id="v-pills-Beauty-tab"
//                       data-bs-toggle="pill"
//                       data-bs-target="#v-pills-Beauty"
//                       type="button"
//                       role="tab"
//                       aria-controls="v-pills-Beauty"
//                       aria-selected="false"
//                     >
//                       Beauty
//                     </button>
//                   </div>
//                   <div className="tab-content" id="v-pills-tabContent">
//                     <div
//                       className="tab-pane fade show active"
//                       id="v-pills-clothes"
//                       role="tabpanel"
//                       aria-labelledby="v-pills-clothes-tab"
//                     >
//                       <div>
//                         asdds
//                         {
//                           options.map = ((i,index) => {
//                             <h2>{i.shoes.label}</h2>;
//                           })
//                         }
//                       </div>
//                     </div>
//                     <div
//                       className="tab-pane fade"
//                       id="v-pills-shoes"
//                       role="tabpanel"
//                       aria-labelledby="v-pills-shoes-tab"
//                     >
//                       ...
//                     </div>
//                     <div
//                       className="tab-pane fade"
//                       id="v-pills-bags"
//                       role="tabpanel"
//                       aria-labelledby="v-pills-bags-tab"
//                     >
//                       ...
//                     </div>
//                     <div
//                       className="tab-pane fade"
//                       id="v-pills-Accessories"
//                       role="tabpanel"
//                       aria-labelledby="v-pills-Accessories-tab"
//                     >
//                       ...
//                     </div>
//                     <div
//                       className="tab-pane fade"
//                       id="v-pills-Beauty"
//                       role="tabpanel"
//                       aria-labelledby="v-pills-Beauty-tab"
//                     >
//                       ...
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div
//                 className="tab-pane fade"
//                 id="pills-men"
//                 role="tabpanel"
//                 aria-labelledby="pills-men-tab"
//               >
//                 ...
//               </div>
//               <div
//                 className="tab-pane fade"
//                 id="pills-kids"
//                 role="tabpanel"
//                 aria-labelledby="pills-kids-tab"
//               >
//                 ...
//               </div>
//               <div
//                 className="tab-pane fade"
//                 id="pills-about"
//                 role="tabpanel"
//                 aria-labelledby="pills-about-tab"
//               >
//                 ...
//               </div>
//             </div>
//           </div>
//         </div>
//       </React.Fragment>
//       // <nav className="NavbarItems">
//       //   <h1 className="navbar-logo">
//       //     <Link style={{ textDecoration: "none", color: "inherit" }} to="/">
//       //       DIBSTUFF
//       //     </Link>
//       //   </h1>
//       //   {/* <Dropdown /> */}
//       //   {/* <InputBar /> */}
//       //   <div className="menu-icon" onClick={this.handleClick}>
//       //     <i
//       //       className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
//       //     ></i>
//       //   </div>
//       //   <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
//       //     <InputBar />
//       //     {MenuItems.map((item, index) => {
//       //       return (
//       //         <li key={index}>
//       //           <a className={item.cName} href={item.url}>
//       //             {item.title}
//       //           </a>
//       //         </li>
//       //       );
//       //     })}
//       //   </ul>
//       //   <Button>
//       //     <Link
//       //       style={{ textDecoration: "none", color: "inherit" }}
//       //       to="/signup"
//       //     >
//       //       Sign Up
//       //     </Link>
//       //   </Button>
//       //   <Button>
//       //     <Link
//       //       style={{ textDecoration: "none", color: "inherit" }}
//       //       to="/login"
//       //     >
//       //       Login
//       //     </Link>
//       //   </Button>
//       // </nav>
//     );
//   }
// }
