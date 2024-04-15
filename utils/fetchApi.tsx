const apiCall = async (endpoint: string, fetchBody: object) => {
  let data: any[] = [];

  const token = `Bearer ${process.env.API_KEY}`;
  let next_page = '';

  console.log(`   ****single page fetch => https://demandapi-sandbox.booking.com/3.1${endpoint}`);
  const response = await fetch(`https://demandapi-sandbox.booking.com/3.1${endpoint}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
    body: JSON.stringify(fetchBody),
  });

  if (response.status === 200) {
    try {
      const res = await response.json();
      if (res.data) {
        data.push(...res.data);
      } else if (res.errors) {
        console.log('**ERROR1');
        console.log(res);
        next_page = '';
      }

      if (res.next_page) {
        next_page = res.next_page;
      } else {
        next_page = '';
      }
    } catch (err) {
      console.log('**ERROR2');
      console.log(err);
      next_page = '';
    }
  } else {
    console.log(`     ***Status ${response.status}`);
    const res = await response.json();
    console.log(res);
    next_page = '';
  }
  console.log(`     Fetched ${data.length} items.`);

  return { next_page, data };
};

export default apiCall;
