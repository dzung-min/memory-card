import NavBarContainer from "./NavBarContainer";
import NavTitle from "./NavTitle";
import ScoreBoard from "./ScoreBoard";

const NavBar = ({ score, highScore }) => (
  <NavBarContainer>
    <NavTitle>Memory Card</NavTitle>
    <ScoreBoard>
      <table>
        <tbody>
          <tr>
            <td>Score</td>
            <td>:</td>
            <td>{score}</td>
          </tr>
          <tr>
            <td>High score</td>
            <td>:</td>
            <td>{highScore}</td>
          </tr>
        </tbody>
      </table>
    </ScoreBoard>
  </NavBarContainer>
);

export default NavBar;
