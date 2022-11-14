import '../../App.css';

function App() {
return (
	<div className="table">
      <table>
        <tr>
          <th><u>Position</u></th>
          <th><u>Name</u></th>
          <th><u>Time</u></th>
          <th><u>Age</u></th>
          <th><u>Gender</u></th>
        </tr>

        <tr>
          <td>1</td>
          <td>Tom Evans</td>
          <td>20:33</td>
          <td>19</td>
          <td>Male</td>
        </tr>

        <tr>
          <td>2</td>
          <td>Megan Green</td>
          <td>20:46</td>
          <td>19</td>
          <td>Female</td>
        </tr>

        <tr>
          <td>3</td>
          <td>Josh Davoni</td>
          <td>30:32</td>
          <td>25</td>
          <td>Male</td>
        </tr>

        <tr>
          <td>4</td>
          <td>Danny Man</td>
          <td>40:16</td>
          <td>33</td>
          <td>Male</td>
        </tr>
        
      </table>
    </div>
);
}

export default App;
