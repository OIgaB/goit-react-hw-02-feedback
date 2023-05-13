import { Component } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import { Container, Title } from "./styled";

export class App extends Component {
    state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  
  onLeaveFeedback = (selectedOption) => {
    this.setState(prevState => ({
      [selectedOption]: prevState[selectedOption] + 1,
    }));
  };

  countTotalFeedback = () => {
    const values = Object.values(this.state); // масив чисел
    return values.reduce((acc, value) => {
      return acc + value; 
    }, 0);
    }
  
  countPositiveFeedbackPercentage = () => {
    const totalFeedback = this.countTotalFeedback();
    if(totalFeedback === 0) {
      return 'There is no feedback';
    } else {
      return Math.round((this.state.good * 100) / totalFeedback) + '%';
    }    
  }



  render() {
    const optionsKeys = Object.keys(this.state); // масив рядків ['good', 'neutral', 'bad']
    const { onLeaveFeedback, countTotalFeedback, countPositiveFeedbackPercentage } = this;
    return (
        <Container> 
          <Title>Expresso Caffee</Title>
          <Section title="Please leave a feedback"> 
            <FeedbackOptions options={optionsKeys} onLeaveFeedback={onLeaveFeedback} /> 
          </Section> 

          <Container>
            <Section title="Statistics">
              {countTotalFeedback() === 0 ? (
                <Notification message='There is no feedback'/>
              ) : (
                <Statistics options={this.state} total={countTotalFeedback} positivePercentage={countPositiveFeedbackPercentage}></Statistics>
              )}
            </Section>
          </Container>
        </Container>
    );
  }
};