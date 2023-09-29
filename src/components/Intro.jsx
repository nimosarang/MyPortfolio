const Intro = () => {
  return (
      <section id="intro">
        <div className="intro__inner">
          <h2 className="intro__title">
            port developer
          </h2>
          <div className="intro__lines" aria-hidden="true">
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </div>
          <div className="intro__text">
            <div className="text">
              <div>talent is</div>
              <div>found at the end of the</div>
              <div>effort</div>
            </div>
            <div className="img">
              <Image
                  src="/assets/img/about.jpg"
                  alt="어바웃"
                  width={300}
                  height={300}
              />
            </div>
          </div>
          <div className="intro__lines bottom" aria-hidden="true">
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </div>
        </div>
      </section>
  )
}

export default Intro;