// Copyright (c) 2018 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

import React from 'react';
import styled from 'styled-components';

const StyledText = styled.div`
  font-size: 12px;
`;

const StyledLink = styled.a`
  text-decoration: underline !important;
  color: white;
  font-weight: 500;
  
  :hover {
    cursor: pointer;
  }
`;

const DisableBanner = styled.div`
  display: inline-block;
  margin-left: 20px;
`;
const FormLink = 'https://docs.google.com/forms/d/1o2VbSIKiRfoTJLi6nGzxNHgDA1Yu-UnNOHglPJvPWpc/edit';

const Announcement = ({onDisable}) => (
  <StyledText>
    <span>Thanks for your interests in kepler.gl. Please help us make it better by taking </span>
    <StyledLink target="_blank" href={FormLink}>this survey</StyledLink>.
    <span> It only takes 5 minutes!</span>
    {onDisable ? <DisableBanner>
      <StyledLink onClick={onDisable}>Already took it</StyledLink>
    </DisableBanner> : null}
  </StyledText>
);

export default Announcement;
