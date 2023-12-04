const React = require("react");
const Def = require("../default");

function index(data) {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1; // Months are zero-indexed, so add 1
  const currentDay = currentDate.getDate();
  const currentYear = currentDate.getFullYear();
  let birthdaysFormatted = data.birthdays.map((birthday) => {
    return (
      <div key={birthday.id} className="col-md-4">
        <h2>
          <a href={`/birthdays/${birthday.id}`}>{birthday.firstName}</a>
        </h2>
        <img className="inGrid" src={birthday.pic} alt={birthday.firstName} />
      </div>
    );
  });
  let birthdaysSideNav = data.birthdays.map((birthday) => {
    return (
      <div key={birthday.id}>
        <img
          className="sideNavImg"
          src={birthday.pic}
          alt={birthday.firstName}
        />
        <a href={`/birthdays/${birthday.id}`}>{birthday.firstName}</a>
      </div>
    );
  });
  return (
    <Def>
      <main>
        <nav className="sidenav">
          <h5>Upcoming Birthdays</h5>
          {birthdaysSideNav}
        </nav>
        <main className="calMain">
          <div>
            <p>
              <img
                src="../images/BirthdayBash16fav.png"
                alt="BirthdayBash Logo"
              />
              It's Time to Party!
              <img
                src="../images/BirthdayBash16fav.png"
                alt="BirthdayBash Logo"
              />
            </p>
          </div>
          <div class="calendar">
            <div class="month-indicator">
              <time datetime="2019-02">
                {" "}
                {currentMonth}/{currentDay}/{new Date().getFullYear()}
              </time>
            </div>
            <div class="day-of-week">
              <div>Su</div>
              <div>Mo</div>
              <div>Tu</div>
              <div>We</div>
              <div>Th</div>
              <div>Fr</div>
              <div>Sa</div>
            </div>
            <div class="date-grid">
              <button>
                <time datetime="2019-02-01">1</time>
              </button>
              <button>
                <time datetime="2019-02-02">2</time>
              </button>
              <button>
                <time datetime="2019-02-03">3</time>
              </button>
              <button>
                <time datetime="2019-02-04">4</time>
              </button>
              <button>
                <time datetime="2019-02-05">5</time>
              </button>
              <button>
                <time datetime="2019-02-06">6</time>
              </button>
              <button>
                <time datetime="2019-02-07">7</time>
              </button>
              <button>
                <time datetime="2019-02-08">8</time>
              </button>
              <button>
                <time datetime="2019-02-09">9</time>
              </button>
              <button>
                <time datetime="2019-02-10">10</time>
              </button>
              <button>
                <time datetime="2019-02-11">11</time>
              </button>
              <button>
                <time datetime="2019-02-12">12</time>
              </button>
              <button>
                <time datetime="2019-02-13">13</time>
              </button>
              <button>
                <time datetime="2019-02-14">14</time>
              </button>
              <button>
                <time datetime="2019-02-15">15</time>
              </button>
              <button>
                <time datetime="2019-02-16">16</time>
              </button>
              <button>
                <time datetime="2019-02-17">17</time>
              </button>
              <button>
                <time datetime="2019-02-18">18</time>
              </button>
              <button>
                <time datetime="2019-02-19">19</time>
              </button>
              <button>
                <time datetime="2019-02-20">20</time>
              </button>
              <button>
                <time datetime="2019-02-21">21</time>
              </button>
              <button>
                <time datetime="2019-02-22">22</time>
              </button>
              <button>
                <time datetime="2019-02-23">23</time>
              </button>
              <button>
                <time datetime="2019-02-24">24</time>
              </button>
              <button>
                <time datetime="2019-02-25">25</time>
              </button>
              <button>
                <time datetime="2019-02-26">26</time>
              </button>
              <button>
                <time datetime="2019-02-27">27</time>
              </button>
              <button>
                <time datetime="2019-02-28">28</time>
              </button>
            </div>
          </div>
        </main>
        <div className="recordedBirthdays">
        <h2>Your Recorded Birthdays</h2>
        <div className="row">{birthdaysFormatted}</div>
        </div>
      </main>
    </Def>
  );
}

module.exports = index;
