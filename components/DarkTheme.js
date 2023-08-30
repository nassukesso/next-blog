function DarkTheme() {
  return (
    <style jsx global>
      {`
        :root {
          --background-color: #222;
          --link-color: rgba(255, 255, 0, 0.7);
          --text-color: rgba(255, 255, 255, 0.9);
        }
      `}
    </style>
  );
}

export default DarkTheme;
