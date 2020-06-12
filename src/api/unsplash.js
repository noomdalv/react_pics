import axios from 'axios';

export default axios.create({
	baseURL: "https://api.unsplash.com/",
	headers: {
		Authorization: "Client-ID kVhg076qkBQTm2-mfVW5eCDEDqjBsyZLNfKZpqMLZtI"
	}
});
