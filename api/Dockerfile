FROM python:3.12 as base

# Sets utf-8 encoding for Python et al
ENV LANG=C.UTF-8
# Setup env and stop Python from generating .pyc files, and enable Python tracebacks on segfaults
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONFAULTHANDLER 1
# Turns off buffering for easier container logging
ENV PYTHONUNBUFFERED=1

FROM base AS python-deps

# Install pipenv and compilation dependencies
RUN pip install pipenv
RUN apt-get update && apt-get install -y --no-install-recommends gcc

# Install python dependencies in /.venv
COPY Pipfile .
COPY Pipfile.lock .
RUN PIPENV_VENV_IN_PROJECT=1 pipenv install --deploy


FROM base AS runtime

# Copy virtual env from python-deps stage
COPY --from=python-deps /.venv /.venv
ENV PATH="/.venv/bin:$PATH"

# Create and switch to a new user
RUN useradd --create-home appuser
WORKDIR /home/appuser
USER appuser
EXPOSE 5050


# Install application into container
COPY . ./


# Run the application
ENTRYPOINT ["python", "-m", "main"]
CMD ["5050"]