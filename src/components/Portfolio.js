import { Fragment, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { portfolioSlider } from "../sliderProps";
import PortfolioModal from "./popup/PortfolioModal";
import { Image } from "next/image";
import { useQuery } from "react-query";

import jkjflyer from "../../public/img/portfolio/jkjflyer.jpeg";
import lowkeypowerful from "../../public/img/portfolio/lowkeypowerful.gif";
import reactime from "../../public/img/portfolio/reactime.gif";
import soundboard from "../../public/img/portfolio/soundboard.gif";
import brbr from "../../public/img/portfolio/brbr.jpeg";

const Portfolio = () => {
  const [modal, setModal] = useState(false);

  // const { isLoading, data } = useQuery(["rarible"], () =>
  //   fetch(
  //     "https://api.rarible.org/v0.1/items/byCreator?creator=ETHEREUM:0x481682C6183bBAAf0b8B8136875dFa24BF508826&blockchains=ETHEREUM&size=14"
  //   ).then((response) => response.json())
  // );

  // const swiperSlides = data?.items?.map((item, i) => (
  //   <SwiperSlide key={i} className="swiper-slide">
  //     <div className="list_inner">
  //       <div className="image">
  //         <img src={item?.meta?.content[0]?.url ?? ""} alt="" />
  //         <div
  //           className="main"
  //           data-img-url={item?.meta?.content[0]?.url ?? ""}
  //         />
  //       </div>
  //       <div className="details">
  //         <h3>{item?.meta?.name ?? ""}</h3>
  //         <span>{item?.meta?.description ?? ""}</span>
  //       </div>
  //       <a
  //         className="edrea_tm_full_link popup-vimeo"
  //         href="//player.vimeo.com/video/337293658?autoplay=1"
  //       />
  //     </div>
  //   </SwiperSlide>
  // ));

  return (
    <Fragment>
      <PortfolioModal open={modal} close={() => setModal(false)} />
      <div className="edrea_tm_section hidden animated" id="portfolio">
        <div className="section_inner">
          <div className="edrea_tm_portfolio swiper-section">
            <div className="edrea_tm_main_title">
              <h3>
                Creative <span className="coloring">Portfolio</span>
              </h3>
            </div>
            <div className="portfolio_list gallery_zoom">
              <Swiper {...portfolioSlider} className="swiper-container">
                <div className="swiper-wrapper">
                  <SwiperSlide className="swiper-slide">
                    <div className="list_inner">
                      <div className="image">
                        <img src="img/thumbs/1-1.jpg" alt="reactime" />
                        <div
                          className="main"
                          data-img-url={
                            "https://reactime.io/static/new-reactime-7181d84806241a8cd72833f08f630127.gif"
                          }
                        />
                      </div>
                      <div className="details">
                        <h3>Reactime</h3>
                        <span>
                          Reactime is a Time travel debugger for React
                          Applications
                        </span>
                      </div>
                      <a
                        className="edrea_tm_full_link reactime_link"
                        href="https://reactime.io/"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="list_inner">
                      <div className="image">
                        <img src={"img/thumbs/1-1.jpg"} alt="soundboard" />
                        <div
                          className="main"
                          data-img-url={
                            "https://res.cloudinary.com/dvwvkt7iq/image/upload/v1675547753/soundboard2019_cnfwcd.gif"
                          }
                        />
                      </div>
                      <div className="details">
                        <h3>Soundboard</h3>
                        <span>
                          Soundboard is a drum machine that plays original wav
                          samples
                        </span>
                      </div>
                      <a
                        className="edrea_tm_full_link soundboard_link"
                        href="https://nmwenz90.github.io/Nate-s-SoundBoard-Project/"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="list_inner">
                      <div className="image">
                        <img src={"img/thumbs/1-1.jpg"} alt="LP" />
                        <div
                          className="main"
                          data-img-url={
                            "https://res.cloudinary.com/dvwvkt7iq/image/upload/v1606964676/lkpcropped_hwuxvf.gif"
                          }
                        />
                      </div>
                      <div className="details">
                        <h3>LP</h3>
                        <span>
                          LP is a animated music player with original music
                        </span>
                      </div>
                      <a
                        className="edrea_tm_full_link"
                        href="https://openprocessing.org/sketch/623862"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="list_inner">
                      <div className="image">
                        <img src={"img/thumbs/1-1.jpg"} alt="Event Flyer" />
                        <div
                          className="main"
                          data-img-url={
                            "https://res.cloudinary.com/dvwvkt7iq/image/upload/v1504671556/Screen_Shot_2017-09-05_at_9_nr3z0a.jpg"
                          }
                        />
                      </div>
                      <div className="details">
                        <h3>Event Flyer</h3>
                        <span>
                          Event flyer is an interacctive flyer designed for
                          Pittsburgh Artist JKJ
                        </span>
                      </div>
                      <a
                        className="edrea_tm_full_link portfolio_popup"
                        href="https://nmwenz90.github.io/eventflyer.github.io/"
                        // onClick={() => setModal(true)}
                      />
                    </div>
                  </SwiperSlide>
                  {/* <SwiperSlide className="swiper-slide">
                    <div className="list_inner">
                      <div className="image">
                        <img src="img/thumbs/1-1.jpg" alt="" />
                        <div
                          className="main"
                          data-img-url="img/portfolio/5.jpg"
                        />
                      </div>
                      <div className="details">
                        <h3>Blue Lemon</h3>
                        <span>Image</span>
                      </div>
                      <a
                        className="edrea_tm_full_link zoom"
                        href="img/portfolio/5.jpg"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="list_inner">
                      <div className="image">
                        <img src="img/thumbs/1-1.jpg" alt="" />
                        <div
                          className="main"
                          data-img-url="img/portfolio/6.jpg"
                        />
                      </div>
                      <div className="details">
                        <h3>Sweet Cheery</h3>
                        <span>Image</span>
                      </div>
                      <a
                        className="edrea_tm_full_link zoom"
                        href="img/portfolio/6.jpg"
                      />
                    </div>
                  </SwiperSlide> */}
                </div>
                <div className="edrea_tm_swiper_progress fill">
                  <div className="my_pagination_in">
                    <span className="current" />
                    <span className="pagination_progress">
                      <span className="all">
                        <span />
                      </span>
                    </span>
                    <span className="total" />
                  </div>
                  <div className="my_navigation">
                    <ul>
                      <li>
                        <a className="my_prev" href="#">
                          <i className="icon-left-open-1" />
                        </a>
                      </li>
                      <li>
                        <a className="my_next" href="#">
                          <i className="icon-right-open-1" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Portfolio;
