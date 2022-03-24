using GraduationProject.Models;
using GraduationProject.Services;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace GraduationProject.Controllers
{
    [Route("api/student")]
    [ApiController]
    public class StudentController : ControllerBase
    {

        private readonly IStudentServices _studentServices;

        public StudentController(IStudentServices studentServices)
        {
            _studentServices = studentServices;
        }

        // GET: api/<StudentController>
        [HttpGet]
        public ActionResult<List<Student>> Get()
        {
            return _studentServices.Get();
        }

        // GET api/<StudentController>/5
        [HttpGet("{id}")]
        public ActionResult<Student> Get(string id)
        {
            var student = _studentServices.Get(id);
            if (student == null)
            {
                return NotFound($"Student with Id = {id} not found");
            }

            return student;
        }

        // POST api/<StudentController>
        [HttpPost]
        public ActionResult<Student> Post([FromBody] Student student)
        {
            _studentServices.Create(student);
            return CreatedAtAction(nameof(Get), new { id = student.Id }, student);
        }

        // PUT api/<StudentController>/5
        [HttpPut("{id}")]
        public ActionResult Put(string id, [FromBody] Student student)
        {
            var existingStudent = _studentServices.Get(id);

            if (existingStudent == null)
            {
                return NotFound($"Student with Id = {id} not found");
            }

            student.Id = existingStudent.Id;

            _studentServices.Update(id, student);

            return NoContent();
        }

        // DELETE api/<StudentController>/5
        [HttpDelete("{id}")]
        public ActionResult Delete(string id)
        {
            var student = _studentServices.Get(id);
            Console.WriteLine(student);
            if (student == null)
            {
                // return NotFound($"Student with Id = {id} not found");
                return Ok("BABABAB");
            }

            _studentServices.Remove(student.Id);

            return Ok($"Student with Id = {id} deleted");
        }
    }
}
