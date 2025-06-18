export const fetchIndiaGDP = async () => {
  try {
    const res = await fetch(
      "https://api.worldbank.org/v2/country/IN/indicator/NY.GDP.MKTP.CD?format=json"
    );
    const data = await res.json();

    const formattedData = data[1]
      .filter((item) => item.value !== null)
      .map((item) => ({ year: item.date, value: (item.value / 1e12).toFixed(2) }))
      .reverse();

    return formattedData;
  } catch (error) {
    console.error("Failed to fetch GDP data: ", error);
    return [];
  }
};
