export default function Activities() {
    return (
        <div className="activities">
        <h3 className="activities-title">Top three activities to do in Lindsay</h3>
        <div className="activities-list">
          <div className="activity">
            <img className="activity-img" src="images/Bowling.jpg" />
            <p className="heading">Go Bowling</p>
            <p>Lindsay is one of the few places left that has 5 pin bowling!</p>
          </div>
          <div className="activity">
            <img className="activity-img" src="images/Fishing.jpg" />
            <p className="heading">Go Fishing</p>
            <p>
              The Scugog River flows right through the center of town, offering
              bass, muskie and carp!
            </p>
          </div>
          <div className="activity">
            <img className="activity-img" src="images/Birding.jpg" />
            <p className="heading">Go Birding</p>
            <p>
              Check out Ken Reid conservation area to see a wide range of
              forest, field and marsh birds!
            </p>
          </div>
        </div>
      </div>

    )
}