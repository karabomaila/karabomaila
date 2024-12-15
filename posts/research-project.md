---
title: 'Medical Image Segmentation using Few-shot Learning'
author: Karabo Maila
---

Medical image segmentation can help with the diagnoses and treatment of patients, and can enhance healthcare. Our research centered around using Few-shot learning (FSL) methods to segment a broad range of abdominal organs. The FLS methods were chosen because of their ability to overcome the limitation of data in healthcare and this is especially important in low resource settings. 

![project image](/project_images/fsl_model.jpeg)

We used a Cross-Attention Transformer model, which was a best performing model in this domain. In the original research paper for this model, the authors only evaluated the model on a small set of abdominal organs prompting us to evaluate the model on a broader set of abdominal organs the model was not evaluated on to see it's possible applicability in clinical settings. Our results shown a poor performance of the model highlighting its limitation is segmenting the broad range of unseen organs. The results emphasises the need for more generalisable models in medical imaging, evaluating the models across a diverse set of abdominal organs, innovative architectures specific to medical image segmentation and also collaboration between researchers and health professionals in developing models that meet their needs.

### Tech used in the project:
- Python
- Pytorch

We had to overcome challenges when working on the project. It was not easy to understand the methods from the literature and some authors do not release the full code or publish their code on Github making it a challenge to understand and implement their methods. The project taught us to be adaptable, persistent and find new ways to solve a problem when the initial plan does not work. 