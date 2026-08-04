# Routes

This project uses **React Router** with a central route table in `src/App.tsx`.
Each page component lives in this `src/routes/` directory and is registered as a
`<Route>` inside `<Routes>`.

## Current routes

| Path                     | Component              |
| ------------------------ | ---------------------- |
| `/`                      | `Home`                 |
| `/about`                 | `About`                |
| `/doctors`               | `Doctors`              |
| `/infrastructure`        | `Infrastructure`       |
| `/orthopedics`           | `Orthopedics`          |
| `/services`              | `Services`             |
| `/gynecology-obstetrics` | `GynecologyObstetrics` |
| `/general-surgery`       | `GeneralSurgery`       |
| `/ent`                   | `ENT`                  |
| `/appointment`           | `Appointment`          |
| `/departments`           | `Departments`          |
| `/facilities`            | `Facilities`           |
| `/contact`               | `Contact`              |
| `*`                      | `NotFound`             |

Add a new page by creating a component here and registering it in `src/App.tsx`.
