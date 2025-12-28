export async function handleSubmit(e, setStatus) {
  e.preventDefault();
  setStatus("submitting");

  try {
    const res = await fetch("https://formspree.io/f/mdaodwya", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: new FormData(e.target),
    });

    if (res.ok) {
      setStatus("success");
      e.target.reset();
    } else {
      setStatus("error");
    }
  } catch (error) {
    setStatus("error");
  }
}
