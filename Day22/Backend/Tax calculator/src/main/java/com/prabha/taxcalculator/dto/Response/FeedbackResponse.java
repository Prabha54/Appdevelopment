package com.prabha.taxcalculator.dto.Response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class FeedbackResponse {
    private Long fid;
    private String uname;
    private String uemail;
    private String question;
    private String answer;
}
