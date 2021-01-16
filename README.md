# django-react-okta

*Inspired by [this excellent repo](https://github.com/macwis/react-django-dockerized/)*

This repo demonstrates a full-stack web development setup:

Frontend: 
	- React
	- Axios
	- Redux
	- Semantic UI

Backend:
	- Django REST Framework

Authentication:
	- Okta (SAML2)

You can spin up the entire thing with docker compose:

```
docker-compose up
```

This stack provides a lot of flexibility. The frontend and backend can be deployed together or separate using just about any type of deployment pattern (S3 website, Kubernetes, EC2, etc.). 

My main goal with this repo was to demonstrate a frontend decoupled from a backend that integrates SSO with SAML using Okta. I followed [this guide](https://medium.com/cogito-engineering/enabling-sso-for-your-react-and-django-app-with-saml-2-0-754ef752acc1) which got me pretty far, but other than that I didn't find many resources for this online. I hope this repo can help others who are trying to solve this issue!

# Quirky things learned along the way

## Okta attributes

Something I want to write down here because it took me a while to figure out: You have to explicitly add the attributes to be sent in the SAML assertion from Okta. You can do this by going through the following:

- Go to your SAML app in Okta
- Add attributes for `email`, `first_name`, `last_name`, and `user`.
- Map these in your settings file like this:

```
{"email": "email", "username": "user", "first_name": "first_name", "last_name": "last_name"}
```

## Sending requests to the backend

Once we have authentication set up, we send requests to the backend with the format:

```
curl localhost/api/users/ -H "Authorization: JWT {... long token ...}"
```