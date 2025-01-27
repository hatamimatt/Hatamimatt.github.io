---
layout: single
title: "Shallow Landslide Risks: A Multidisciplinary Approach"
excerpt: "Investigating risk of shallow landslides using geological, photogrammetric, and geophysical prespectives"
permalink: /projects/ml-water-prediction/
category: MSc.
image: /images/landslide1.jpg
---
**Investigating Shallow Landslide Risks: A Multidisciplinary Approach**

Shallow landslides, often triggered by rainfall, pose significant risks to human life and infrastructure. To better understand this phenomenon, our study adopted a **multidisciplinary approach**, examining a rainfall-induced shallow landslide from three distinct perspectives: geological, photogrammetric, and geophysical. Each perspective contributed unique insights into the mechanics and progression of landslides.

---

## Geological Perspective

From a geological standpoint, we aimed to monitor changes in soil properties and assess how water infiltration influences slope stability. 

### Methodology
1. **Instrumentation**:
   - **TDR Sensors**: Measured volumetric water content (VWC) to track soil saturation.
   - **Tensiometers**: Monitored negative pore pressure (suction) during the experiment.
   - **Arduino Probes**: Recorded soil moisture levels in real time.

2. **Experimental Setup**:
   - Two experiments were conducted using a controlled rainfall simulator and a 35° slope inclination. Experiment 0 had compacted soil layers, while Experiment 1 combined compacted and uncompacted layers to explore their impact on landslide behavior.

![Landslide Failure by Arduino Sensor](https://matthewhatami.github.io/images/arduino.jpg)  
*Landslide Failure by Arduino Tensor*

![Landslide Failure by Tensiometer Sensor](https://matthewhatami.github.io/images/arduino.jpg)  
*Landslide Failure by Tensiometer Tensor*

3. **Numerical Model**:
   - A numerical model was used to simulate the landslide using the **Shallow Landslide Instability Prediction (SLIP)**, incorporating soil properties, rainfall intensity, and slope geometry. Given the limitations of this model, initially it predict the landslide failure with a 5 minute delay. We then calibrated the model with the experiement setup (e.g. modifying the model to be used for 2 layers of soil with different characteristics), which lead to the precise prediction of the landslide failure.

![Slip Model Output Before Calibration](https://matthewhatami.github.io/images/slip1.jpg)  
*Slip Model Output Before Calibration*

![Slip Model Output After Calibration](https://matthewhatami.github.io/images/slip2.jpg)  
*Slip Model Output After Calibration*

### Findings
- VWC increased steadily during rainfall, but anomalies in TDR data revealed the formation of cracks, confirming the critical role of soil saturation in triggering landslides.
- Tensiometer readings highlighted a time lag before water reached deeper layers, with variations in pressure correlating to slope failure events.


---

## Photogrammetric Perspective

Photogrammetry techniques was also employed to visually document and analyze the physical changes in the slope during the experiments.

### Methodology
1. **Image Acquisition**:
   - High-resolution cameras captured images of the slope at regular intervals.
2. **Digital Image Analysis**:
   - 2D Digital Image Correlation (DIC) was used to quantify displacements.
   - Photogrammetric techniques constructed 3D models of the slope to monitor crack propagation and surface changes.

### Findings
- Photogrammetry validated geological observations by identifying crack formations at predicted times.
- Significant fractures and displacements were mapped, revealing the progression of the landslide and highlighting areas of instability.
- 3D modeling provided a comprehensive view of slope deformation, offering valuable data for assessing risk.

![3D Presentations of the Fracture](https://matthewhatami.github.io/images/photogrammetry1.jpg)  
*3D Presentations of the Fractureon*


![Volume Changes by Pointcloud](https://matthewhatami.github.io/images/pointcloud.jpg)  
*Volume Changes by Pointcloud*

---

## Geophysical Perspective

Geophysical techniques complemented geological and photogrammetric findings by examining subsurface changes in the slope.

### Methodology
1. **Electrical Resistivity Imaging**:
   - Resistivity models were generated using Res2DInv software to monitor subsurface water movement and void formation.
2. **Data Correlation**:
   - Resistivity changes were compared with surface observations and geological data to ensure consistency.

### Findings
- Resistivity models showed water infiltration patterns, confirming increased saturation in specific regions of the slope.
- High-resistivity zones aligned with observed cracks and fractures, indicating void formation and soil displacement.
- Geophysical data reinforced the hypothesis that water movement and saturation are key drivers of slope instability.

![Geophysical  ERT Data Representation](https://matthewhatami.github.io/images/geophysic1.jpg)  
*Geophysical  ERT Data Representation*


---

## Conclusion

By integrating geological, photogrammetric, and geophysical perspectives, this study provided a holistic understanding of rainfall-induced shallow landslides. Key insights include:
- Soil saturation is the primary driver of instability, with crack formation acting as an early indicator of failure.
- Multidisciplinary techniques validate and complement one another, offering robust tools for landslide risk assessment.

This comprehensive approach underscores the value of combining diverse methodologies to enhance predictive models and inform mitigation strategies for landslide-prone regions.
