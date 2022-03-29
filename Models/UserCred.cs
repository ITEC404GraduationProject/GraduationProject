using System.ComponentModel.DataAnnotations;

namespace GraduationProject.Models
{
    public class UserCred
    {
        [Required]
        [RegularExpression("^[a-zA-Z0-9_\\.-]+@([a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,6}$", ErrorMessage = "E-mail is not valid")]
        public string Email { get; set; }

        [Required]
        [MinLength(8)]
        [RegularExpression("(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{8,})$", ErrorMessage = "Invalid Password")]
        public string Password { get; set; }
    }
}
