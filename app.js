const Grid = new gridjs.Grid({
  columns: ['Name', 'Email', 'Phone Number'],
  data: [
    ['Jabar', 'jabaw123@gmail.com', '08122198413'],
    ['Bejo', 'bejo28@gmail.com', '08121196811'],
  ],
}).render(document.getElementById('green'));

export default Grid;
