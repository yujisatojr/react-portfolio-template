const myBirthDate = "2001-05-21"

export const getAge = () => {
  var today = new Date();
  var birthDate = new Date(myBirthDate);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
  }
  return age;
}