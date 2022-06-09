using GraduationProject.Models;
using GraduationProject.Services;
using Microsoft.AspNetCore.Mvc;
using BCrypt.Net;
using Microsoft.AspNetCore.Authorization;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace GraduationProject.Controllers
{
    [Authorize]
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
        [AllowAnonymous]
        public ActionResult<Student> Post([FromBody] Student student)
        {

            var existingStudent = _studentServices.GetByEmail(student.Email);
            if (existingStudent == null)
            {
                _studentServices.Create(student);
                return CreatedAtAction(nameof(Get), new { id = student.Id }, student);
            }

            return NotFound("Student with this email already exist");
        }

        [AllowAnonymous]
        [HttpPost("login")]
        public ActionResult<Student> Authenticate([FromBody] UserCred userCred)
        {
            var existingStudent = _studentServices.GetByEmail(userCred.Email);
            if (existingStudent == null)
            {
                return NotFound("Student account with this email was not found");
            }

            var token = _studentServices.Authenticate(existingStudent, userCred.Password);
            if (token == null)
            {
                return Unauthorized();
            }

            return Ok(new {token, user = existingStudent});
           
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
            if (student == null)
            {
                return NotFound($"Student with Id = {id} not found");
            }

            _studentServices.Remove(student.Id);

            return Ok($"Student with Id = {id} deleted");
        }
    }
}
