function App() {
  return (
    <div>
      <MyName />
      <CourseName />
      <CourseContent />
    </div>
  );
}

function MyName() {
  return <h1>Приходько Іван</h1>;
}

function CourseName() {
  return <h2>
    Курс Web-програмування
  </h2>
}

function CourseContent() {
  return <ul><h3>Містить уроки з</h3><li>мови розмітки HTML</li><li>мови стилю CSS</li><li>мови програмування JS</li><li>бібліотеки React JS</li></ul>
}

export default App;
