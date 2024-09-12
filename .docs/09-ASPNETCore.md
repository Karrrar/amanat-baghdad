# Introduction to ASP.NET Core Web API with Controllers

ASP.NET Core is a modern, cross-platform, high-performance framework for building web applications and APIs. A **Web API** (Application Programming Interface) allows systems to communicate with each other using HTTP protocols, enabling the creation of services like RESTful APIs.

### Key Features of ASP.NET Core Web API:

- **Cross-Platform**: You can develop and run ASP.NET Core Web APIs on Windows, macOS, and Linux.
- **High Performance**: It's optimized for speed and scalability.
- **Built-in Dependency Injection**: It has built-in support for Dependency Injection (DI), making it easy to manage application dependencies.
- **Modular Middleware**: ASP.NET Core provides a customizable pipeline for handling HTTP requests.

---

## Setting Up an ASP.NET Core Web API Project

### 1\. Using the .NET CLI (Command Line Interface)

To create an ASP.NET Core Web API project using the **command line**, follow these steps:

1.  **Open a terminal** (Command Prompt, PowerShell, or bash) and run the following command:

    ```bash
    dotnet new sln
    dotnet new webapi -n MyWebApi -controllers
    dotnet sln add ./MyWebApi
    ```

    - `-n MyWebApi`: Specifies the project name as `MyWebApi`.
    - `-controllers`: Ensures that the template includes controller logic by default.

2.  **Navigate into the project directory**:

    ```bash
    cd MyWebApi
    ```

3.  **Run the project**:

    ```bash
    dotnet run
    ```

This will create a new ASP.NET Core Web API project with basic controllers included, set up the necessary files, and start the development server.

### 2\. Using Visual Studio

If you prefer to use **Visual Studio**, follow these steps:

1.  **Open Visual Studio**.

2.  **Create a new project**:

    - In the **Create a new project** dialog, select **ASP.NET Core Web API** from the list of templates, then click **Next**.

3.  **Configure your project**:

    - Name the project (e.g., `MyWebApi`).
    - Choose the **Location** where you want to save the project.
    - Click **Create**.

4.  **Select the framework**:

    - In the **Additional Information** dialog, select the **.NET version** you want to target (e.g., `.NET 8.0`).
    - In the **Authentication type** select **None**.
    - Ensure **Use controllers** is selected to include the controller-based architecture.
    - Click **Create**.

5.  **Run the project**:

    - Press `F5` or click **Start** to run the project. This will launch the Web API and open a browser window with the Swagger UI for testing the API.

---

## Creating a Controller

A Web API controller is typically a C# class that derives from `ControllerBase` and resides in the `Controllers` folder. Here's how you can create a simple controller to manage a collection of cars:

### Example: `CarsController`

```csharp

using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace MyWebApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CarsController : ControllerBase
    {
        private static List<Car> Cars = new List<Car>
        {
            new Car { Id = 1, Make = "Toyota", Model = "Camry", Year = 2022 },
            new Car { Id = 2, Make = "Honda", Model = "Accord", Year = 2021 }
        };

        // GET: api/cars
        [HttpGet]
        public ActionResult<IEnumerable<Car>> GetCars()
        {
            return Ok(Cars);
        }

        // GET: api/cars/{id}
        [HttpGet("{id}")]
        public ActionResult<Car> GetCarById(int id)
        {
            var car = Cars.Find(c => c.Id == id);
            if (car == null)
            {
                return NotFound();
            }
            return Ok(car);
        }

        // POST: api/cars
        [HttpPost]
        public ActionResult<Car> CreateCar([FromBody] Car newCar)
        {
            Cars.Add(newCar);
            return CreatedAtAction(nameof(GetCarById), new { id = newCar.Id }, newCar);
        }

        // PUT: api/cars/{id}
        [HttpPut("{id}")]
        public ActionResult UpdateCar(int id, [FromBody] Car updatedCar)
        {
            var car = Cars.Find(c => c.Id == id);
            if (car == null)
            {
                return NotFound();
            }

            car.Make = updatedCar.Make;
            car.Model = updatedCar.Model;
            car.Year = updatedCar.Year;
            return NoContent();
        }

        // DELETE: api/cars/{id}
        [HttpDelete("{id}")]
        public ActionResult DeleteCar(int id)
        {
            var car = Cars.Find(c => c.Id == id);
            if (car == null)
            {
                return NotFound();
            }

            Cars.Remove(car);
            return NoContent();
        }
    }

    public class Car
    {
        public int Id { get; set; }
        public string Make { get; set; }
        public string Model { get; set; }
        public int Year { get; set; }
    }
}

```

### Explanation:

- **Attributes**:
  - `[ApiController]`: This attribute indicates that the class defines an API controller. It automatically handles some common API behaviors, like model validation.
  - `[Route("api/[controller]")]`: This sets the routing for the controller. The `[controller]` token is replaced by the controller's name (`Cars`), so the full route for the API is `/api/cars`.
- **Action Methods**:
  - **`GetCars`** (`GET /api/cars`): Returns a list of all cars.
  - **`GetCarById`** (`GET /api/cars/{id}`): Returns a car by its ID.
  - **`CreateCar`** (`POST /api/cars`): Adds a new car to the list.
  - **`UpdateCar`** (`PUT /api/cars/{id}`): Updates the details of an existing car.
  - **`DeleteCar`** (`DELETE /api/cars/{id}`): Deletes a car by its ID.

---

## Handling HTTP Verbs

Each action method in the controller is associated with an HTTP verb:

- **`HttpGet`**: Used to retrieve data from the server (e.g., `GET`).
- **`HttpPost`**: Used to send data to the server for creation (e.g., `POST`).
- **`HttpPut`**: Used to update existing data on the server (e.g., `PUT`).
- **`HttpDelete`**: Used to delete data from the server (e.g., `DELETE`).

These attributes help define how your API interacts with clients.

---

## Testing the API

To test the Web API, you can use tools like:

1.  **Postman**: A popular API client for sending HTTP requests and receiving responses.
2.  **Swagger**: ASP.NET Core provides built-in support for generating Swagger/OpenAPI documentation. By default, Swagger is included in new Web API projects, allowing you to test the API via a browser.

To access Swagger UI, simply run the project, and navigate to: `https://localhost:5001/swagger`
