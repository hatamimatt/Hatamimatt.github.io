---
layout: single
title: "WebGIS Services to Support Shelters Location"
excerpt: "Using ArcGIS Pro to find the most suitable locations for shelters in Lazio region in Italy"
permalink: /projects/lazioShelters/
category: GIS
image: webGISProjectCoverPhoto.png
---
 **Geospatial Data Processing to Support Seismic Emergency Management: A WebGIS Approach for Shelter Location Planning in Amatrice, Italy**

---

## **Introduction**  
Disasters, particularly earthquakes, pose significant threats to human lives and infrastructure due to their unpredictability and destructive potential. This project, conducted as part of the MSc in Civil Engineering for Risk Mitigation at Politecnico di Milano, addresses the critical challenge of locating shelters during seismic emergencies. Focusing on Amatrice, Italy—a town devastated by a 2016 Mw 6.2 earthquake—the study integrates geospatial data processing and WebGIS tools to optimize shelter placement, ensuring safety, accessibility, and alignment with demographic needs.  

---

## **Project Overview**  
The goal is to identify and rank suitable shelter locations using a structured four-phase workflow:  
1. **Geological Suitability**: Slope, soil type, and land cover analysis.  
2. **Hazard Susceptibility**: Floods, landslides, seismic faults, and man-made hazards.  
3. **Serviceability Ranking**: Proximity to lifelines (roads, medical services, water, police stations).  
4. **Final Categorization**: Tailored solutions for medical needs, accessibility, and responder logistics.  

A WebGIS portal (built on ArcGIS Online and GeoNode) visualizes results, enabling real-time decision-making for authorities during emergencies.  

---
![Workflow Diagram](https://matthewhatami.github.io/projects/framework.jpg)  
*Figure 1: Four-phase workflow for shelter location planning.*
## **Key Components**  

### **1. Geological and Hazard Analysis**  
- **Phase 1**: Excluded areas with slopes >10°, clay-rich soils, dense forests, and urban zones.  
- **Phase 2**: Filtered flood-prone zones, landslide-susceptible areas, and proximity to hazards (e.g., fuel stations, power grids).  
![Output of Phase 1 and Phase 2](https://matthewhatami.github.io/projects/phase1and2.jpg)  
*Figure 2: Output of Phase 1 and 2.*
### **2. Serviceability and Lifelines**  
- **Phase 3**: Ranked remaining areas by accessibility to roads, medical centers, water sources, and police stations. High-population zones received priority.  
![Output of Phase 3](https://matthewhatami.github.io/projects/phase3.jpg)  
*Figure 3: Output of Phase 3.*

- **Phase 4**: Categorized shelters for specific needs:  
  - **Medical priority**: Near hospitals.  
  - **Family-friendly**: Close to residential areas.  
  - **First responders**: Central locations for rapid deployment.  
![Output of Phase 4](https://matthewhatami.github.io/projects/phase4.jpg)  
*Figure 4: Output of Phase 4.*
### **3. WebGIS Implementation**  
- **ArcGIS Online**: Interactive maps, dashboards, and real-time road network updates. Features include:  
  - Distance/area measurement tools.  
  - Shelter categorization layers.  
  - Synchronized emergency route maps.  
  - **GeoNode**: Open-source redundancy with downloadable datasets and customizable layers.  

  ![dashboardInterface](https://matthewhatami.github.io/projects/dashboardInterface.jpg)  
*Figure 5: ArcGIS Online Dashboard Interface.*

  ![geonodeWebpage](https://matthewhatami.github.io/projects/geonodeWebpage.jpg)  
*Figure 6: Open-source GeoNode webpage.*
---

## **Data and Methodology**  
- **Sources**: Regional Geoportal Lazio, Copernicus EU, OpenStreetMap.  
- **Tools**: ArcGIS Pro, QGIS, Google Earth Engine (for scalable analysis).  
- **Weights Assignment**: Multi-criteria decision analysis (MCDA) applied to prioritize factors like slope (weight = 7) and landslide susceptibility (weight = 10).  

---

## **Outcomes**  
- **Shelter Capacity**: Accommodates 2,889 evacuees (2,689 residents + 200 responders).  
- **Real-Time Dashboards**: Track shelter occupancy, road status, and resource allocation.  
- **Scalability**: Framework adaptable to other regions via Google Earth Engine’s cloud processing.  

---

## **Challenges and Innovations**  
- **Inefficiencies Addressed**: Manual data processing limitations resolved using cloud-based tools.  
- **Psychological Considerations**: Shelter categorization accounts for medical needs, privacy, and security.  
- **Redundancy**: Dual-platform WebGIS (ArcGIS + GeoNode) ensures accessibility during crises.  

---

## **Conclusion**  
This project exemplifies how geospatial technologies enhance disaster resilience. By combining geological rigor, hazard mitigation, and humanitarian considerations, the proposed framework ensures efficient shelter placement, saving lives and streamlining emergency response. The WebGIS portal empowers decision-makers with dynamic, real-time insights, setting a precedent for scalable disaster management solutions worldwide.  

---  



*Authored by Matthew (Mehdi) Hatami Goloujeh, Ahmed Gamal Mahmoud Ebrahim Salem, and Ahmed Ibrahim Yousef Soliman Elmahdy. Supervised by Prof. Daniela Carrion, Prof. Maria Pia Boni, and Prof. Scira Menoni.*  

---  
*References included in the original report are available upon request.*  

<p>To read the full report of the project you can <a href="/files/webGISsheltersProject.pdf" target="_blank">download it here</a>.</p>