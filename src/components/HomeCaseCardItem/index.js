/* eslint-disable react/no-unknown-property */
import './index.css'

const HomeCaseCardItem = props => {
  const {
    stateTotal,
    showActiveCases,
    showDeceasedCases,
    showRecoveredCases,
    showConfirmedCases,
  } = props

  // console.log(stateTotal)

  const {confirmed, deceased, recovered, active} = stateTotal

  const activeConfirmedClass = showConfirmedCases
    ? 'confirmed-active-class'
    : ''
  const activeActiveClass = showActiveCases ? 'active-active-class' : ''

  const activeRecoveredClass = showRecoveredCases
    ? `recovered-active-class`
    : ''

  const activeDeceasedClass = showDeceasedCases ? `deceased-active-class` : ''

  return (
    <>
      <div
        testid="countryWideConfirmedCases"
        className={`home-country-wide confirmed ${activeConfirmedClass}`}
      >
        <p className="case-card-heading">Confirmed</p>
        <img
          src="https://res.cloudinary.com/aniket-shinde/image/upload/v1705426366/covideproject7_hwq6ax.png"
          alt="country wide confirmed cases pic"
        />
        <p className="case-count confirmed">{confirmed}</p>
      </div>
      <div
        testid="countryWideActiveCases"
        className={`home-country-wide active ${activeActiveClass}`}
      >
        <p className="case-card-heading">Active</p>
        <img
          src="https://res.cloudinary.com/aniket-shinde/image/upload/v1705426470/covideproject8_yk32k4.png"
          alt="country wide active cases pic"
        />
        <p className="case-count">{active}</p>
      </div>
      <div
        testid="countryWideRecoveredCases"
        // onClick={onClickRecovered}
        className={`home-country-wide recovered ${activeRecoveredClass}`}
        // className="country-wide recovered"
      >
        <p className="case-card-heading">Recovered</p>
        <img
          src="https://res.cloudinary.com/aniket-shinde/image/upload/v1705426564/covideproject9_epitzd.png"
          alt="country wide recovered cases pic"
        />
        <p className="case-count">{recovered}</p>
      </div>

      <div
        testid="countryWideDeceasedCases"
        // onClick={onClickDeceased}
        className={`home-country-wide deceased ${activeDeceasedClass}`}
        // className="country-wide deceased"
      >
        <p className="case-card-heading">Deceased</p>
        <img
          src="https://res.cloudinary.com/aniket-shinde/image/upload/v1705426664/covideproject10_ypjm4h.png"
          alt="country wide deceased cases pic"
        />
        <p className="case-count">{deceased}</p>
      </div>
    </>
  )
}
export default HomeCaseCardItem
