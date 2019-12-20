FROM ruby:2.6.1
RUN apt-get update -qq && apt-get install -y nodejs postgresql-client
RUN mkdir /myapp
WORKDIR /myapp
COPY Gemfile /myapp/Gemfile
COPY Gemfile.lock /myapp/Gemfile.lock
RUN gem install bundler
RUN bundle install
COPY . /myapp

#RUN rails db:create
#RUN rails db:migrate
#RUN rails db:seed

CMD ["rails", "server", "-b", "0.0.0.0"]
